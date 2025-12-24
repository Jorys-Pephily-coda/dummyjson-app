import { Component } from "@angular/core";
import { PostsService } from "../../services/posts/posts.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.css",
})
export class PostsComponent {
  constructor(
    private postsService: PostsService,
    private router: Router,
  ) {}

  posts: any[] = [];

  ngOnInit() {
    this.postsService.getAllPosts().then((posts) => {
      for (let post of posts) {
        this.posts.push(post);
      }
    });
  }

  RedirectToUserDetails(userid: number) {
    this.router.navigate(["/details", userid]);
  }
  RedirectToPostDetails(postid: number) {
    this.router.navigate(["/post", postid]);
  }
}
