import {Component, OnInit} from '@angular/core';
import {PostsService} from "../services/posts.service";

const displayPosts = `
        <div>
            <h2>posts list</h2>
            <div class="posts">
                <ul *ngFor="let post of postsList">
                    <li>{{post.userId}} - {{post.id}} - {{post.title}} - {{ post.body }}</li>
                </ul>
            </div>
        </div>
  `

@Component({
    selector: 'app-post-list',
    template: `<div>
        <div style="display: inline-block;">
            <button (click)="getPostsData()">Get Posts (GET Action Call)</button>
            <button>Posts (POST Action Call)</button>
        </div>
        ${displayPosts}
    </div>`,
    styles: [
        `.posts {
            height: 400px;
            overflow: auto;
            position: relative;
        }`
    ]
})
export class PostListComponent implements OnInit {

    postsList: any;

    constructor(
        private posts: PostsService
    ) {
    }

    ngOnInit(): void {
    }

    getPostsData() {
        this.posts.getPosts().subscribe((data) => {
            this.postsList = data
        })
    }

}
