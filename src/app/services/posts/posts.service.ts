import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor() {}

  getAllPosts() {
    return fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => data.posts);
  }

  getPostById(id: number) {
    return fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  }
  getCommentsByPostId(id: number) {
    return fetch(`https://dummyjson.com/post/${id}/comments`)
      .then((response) => response.json())
      .then((data) => data.comments);
  }
}
