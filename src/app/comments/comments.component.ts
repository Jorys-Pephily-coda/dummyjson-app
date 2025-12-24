import { Component } from "@angular/core";
import { PostsService } from "../services/posts/posts.service";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-comments",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./comments.component.html",
  styleUrl: "./comments.component.css",
})
export class CommentsComponent {
  constructor(
    private commentsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  comments: any[] = [];
  postId: number = 0;

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get("id"));
    this.postId = postId;
    this.commentsService.getCommentsByPostId(postId).then((comments) => {
      for (let comment of comments) {
        this.comments.push(comment);
      }
    });
  }

  onClick(userid: number) {
    this.router.navigate(["/details", userid]);
  }
}
