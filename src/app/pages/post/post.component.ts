import { Component } from "@angular/core";
import { PostsService } from "../../services/posts/posts.service";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CommentsComponent } from "../../comments/comments.component";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.css",
})
export class PostComponent {
  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  post: any = null;

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get("id"));
    this.postsService.getPostById(postId).then((post) => {
      this.post = post;
    });
  }

  onClick(userid: number) {
    this.router.navigate(["/details", userid]);
  }
}
