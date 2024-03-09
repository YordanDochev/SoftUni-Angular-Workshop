import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/types/post';
import { ContentService } from '../../content.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  isLoaded: boolean = false;
  constructor(private api: ContentService) {}
  ngOnInit(): void {
    this.api.getPosts(5).subscribe((data) => (this.posts = data));

    this.isLoaded = true;
  }
}
