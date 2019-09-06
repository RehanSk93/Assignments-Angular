import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../post.service';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {


  constructor(public postService: PostService) { }

  ngOnInit() {
  }

  // Create a method to transfer data to service
  onAddPost(form: NgForm) {
    // Simply extract form value and store in a constant variable
    // const post: Post = { title: form.value.title, content: form.value.content };

    // If form is valid then only we can submit the form.
    if (form.invalid) {
      return;
    }
    // transfer data to service page through dependency injection
    this.postService.addPost(form.value.title, form.value.content);
    }
}
