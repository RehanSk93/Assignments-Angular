import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

import { Post } from './post.model';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {

    // end of the url employee.json must be added or it won't work
    readonly _URL = 'https://ng-crud-app-6552f.firebaseio.com/empDetails.json';

    // handling error using rxjs subject Object .....
    errorMsg = new Subject<string>();

    constructor(private http: HttpClient) { }

    // create & Submit form details to database
    createAndStorePost(title: string, content: string) {
        const formData: Post = { title: title, content: content };
        return this.http
                .post<{ name: string }>(
                    this._URL, formData,
                    {   // In that way we can get full HttpResponse like status code, headers,
                        // status text and so on...
                        // observe takes couple of values like body, response, and
                        // events(explain inside delete method)
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
                errorRef => {
                    // 'errorRef.message' is provided by firebase..
                    this.errorMsg.next(errorRef.message);
                });
    }



    // fetch all records from database..
    fetchPosts() {
      // if you send multiple params then you should follow this technique
      // let multipleParams = new HttpParams();
      // multipleParams = multipleParams.append('print', 'pretty');
      // multipleParams = multipleParams.append('custom', 'key');

        return this.http.get<{ [key: string]: Post }>(
            this._URL,
            {
                // Send custom header, or send json token here
                // import HttpHeaders from '@angular/common/http'
                headers: new HttpHeaders({ 'Custom-Header' : 'Set-Header-as-you-want' }),

                // We can set Query parameters and multiple para meter can send
                // import HttpParams from '@angular/common/http'
                params: new HttpParams().set('print', 'pretty')
                // params: multipleParams   // now add multiple params like this way
            }
        )
            .pipe(
                // 'map' is a Observable operator use to transform data
                map(responseData => {
                    const storeData: Post[] = [];
                    for (const key in responseData) {
                        // 'hasOwnProperty' method check only key property not others like prototype
                        if (responseData.hasOwnProperty(key)) {
                            // Pushing all data as array of Object format.
                            storeData.push({ ...responseData[key], id: key });
                        }
                    }
                    return storeData;  // Must return 'storeData'
                }),
                // This is another way to handle error, Import catchError Operator from Rxjs
                catchError(errorResp => {
                  // import throwError Operator from RxJs to throw getting error
                  return throwError(errorResp);
                })
            );
    }


    // Delete all posts
    deletePosts() {
        return this.http.delete(this._URL,
          {
            // showing error more explicitly
            observe: 'events'
          }).pipe(tap(event => {
            if (event.type === HttpEventType.Sent) {
              console.log(event);
            }
            if (event.type === HttpEventType.Response) {
              console.log(event.body);
            }
          }
          ));
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
