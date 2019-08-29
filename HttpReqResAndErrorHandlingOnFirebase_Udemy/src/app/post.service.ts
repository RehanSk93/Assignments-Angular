import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {

    // end of the url employee.json must be added or it won't work
    readonly _URL = 'https://ng-crud-app-6552f.firebaseio.com/empDetails.json';

    // handling error using rxjs subject Object .....
    errorMsg = new Subject<string>();

    constructor(private http: HttpClient) { }

    // create & Submit form details to database
    createAndStorePost(title: string, content: string) {
        const formData: Post = { title: title, content: content }
        return this.http
                .post<{ name: string }>(
                    this._URL, 
                    formData,
                    {   // In that way we can get full HttpResponse. 
                        observe: 'response' 
                    }
                )
                .subscribe(
                    responseData => {
                        // Show only response body, see the console to understand the different
                        console.log(responseData.body);

                        // Here showing full response each and everything about HttpResponse
                        console.log(responseData);
                }, 
                error_ref => {
                    // 'error_ref.message' is provided by firebase..
                    this.errorMsg.next(error_ref.message);
                });
    }



    // fetch all records from database..
    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>(
            this._URL, 
            {   // Send custom header, or send json token here
                headers: new HttpHeaders({ 'Custom-Header' : 'Set-Header-as-you-want' }),
                // We can set Query parameters and multiple para meter can send 
                params: new HttpParams().set('print', 'pretty')
            }
        )
            .pipe(
                // 'map' is a Observable operator use to transform data
                map(responseData => {
                    const storeData: Post[] = [];
                    for (let key in responseData) {
                        // 'hasOwnProperty' method check only key property not others like prototype
                        if (responseData.hasOwnProperty(key)) {
                            // Pushing all data as array of Object format.
                            storeData.push({ ...responseData[key], id: key })
                        }
                    }
                    return storeData;  // Must return 'storeData'
                })
            )
    }


    // Delete all posts
    deletePosts() {
        return this.http.delete(this._URL);
    }
}


/*
Error handling
    -> Using the catchError Operator
    -> errorMsg = new Subject<string>();
*/

/*
    -> Send HttpHeaders
*/