import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor() {}

  async getAllPosts() {
    const response = await fetch("https://dummyjson.com/posts");
    const json = await response.json();

    const postsWithUsers = await Promise.all(
      json.posts.map(async (post: any) => {
        const userResponse = await fetch(
          `https://dummyjson.com/users/${post.userId}`,
        );
        const user = await userResponse.json();
        console.log(user);

        return {
          ...post,
          user,
        };
      }),
    );

    console.log(postsWithUsers);

    return postsWithUsers;
  }

  async getPostById(id: number) {
    const postResponse = await fetch(`https://dummyjson.com/posts/${id}`);
    const post = await postResponse.json();

    const userResponse = await fetch(
      `https://dummyjson.com/users/${post.userId}`,
    );
    const user = await userResponse.json();

    return {
      ...post,
      user,
    };
  }

  getCommentsByPostId(id: number) {
    return fetch(`https://dummyjson.com/post/${id}/comments`)
      .then((response) => response.json())
      .then((data) => data.comments);
  }
}
