import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-show-server',
  templateUrl: './show-server.component.html',
  styleUrls: ['./show-server.component.css'],
})
export class ShowServerComponent implements OnInit {

  // create a array to store data after fetching
  postsData: Post[] = [];

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postsData = this.postService.getPosts();
  }
}
