import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // Create an array and store data inside this array
  private posts: Post[] = [];

  constructor() { }

  // fetch data from array
  getPosts() {
    // ... is a spread operator, it is give you an instance of that array.
    return this.posts;
  }

  // add post inside this array
  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
  }
}
