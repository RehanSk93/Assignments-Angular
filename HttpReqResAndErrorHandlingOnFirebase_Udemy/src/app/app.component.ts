import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from, Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  // Store all fetching data here
  PostData: Post[] = [];

  // Showing Loading message when data is fetching
  isFetching = false;

  // Store error message if Occurred
  errorMessage = null;

  // destroy error message after task complete
  private errorSub: Subscription;

  constructor(private http: HttpClient,
              private postService: PostService) {}

  ngOnInit() {
    // showing error if available
    this.errorSub = this.postService.errorMsg.subscribe(errorRes => {
        this.errorMessage = errorRes;
    });

    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      // Handling response...
      result => {
      this.isFetching = false;
      this.PostData = result;
    },
    // Handling error if Occurred..
    error => {
      this.isFetching = false;
      // error.message provided by firebase, check console.log
      this.errorMessage = error.message;
      console.log(error);
    }
    );
  }


  // Submit form details to database
  onSubmit(formData: {title: string, content: string}) {
    this.postService.createAndStorePost(formData.title, formData.content);
  }


  // Fetch data when click the button
  onFetchPost() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      result => {
      // now here 'responseData' is array of 'responseData'
      this.isFetching = false;
      this.PostData = result;
    },
    // Handling error if Occurred..
      error => {
        this.isFetching = false;
        // error.message provided by firebase, check console.log
        this.errorMessage = error.message;
        console.log(error);
      }
    );
  }


  // Clear all list of records....
  OnClearPosts() {
    this.postService.deletePosts()
        .subscribe( () => {
          this.PostData = [];
        });
  }


  // Remove alert prompt
  onHandleError() {
    this.errorMessage = null;
  }

  // after compleat task unsubscribe the error property...
  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

}
