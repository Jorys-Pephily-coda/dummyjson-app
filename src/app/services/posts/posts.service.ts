import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any[]> {
    return this.http.get<any>("https://dummyjson.com/posts").pipe(
      switchMap((res) => {
        const posts = res.posts as any[];
        const observables = posts.map((post) =>
          this.http
            .get<any>(`https://dummyjson.com/users/${post.userId}`)
            .pipe(map((user) => ({ ...post, user }))),
        );
        return observables.length
          ? forkJoin(observables)
          : new Observable<any[]>((subscriber) => {
              subscriber.next([]);
              subscriber.complete();
            });
      }),
    );
  }

  getPostById(id: number): Observable<any> {
    return this.http
      .get<any>(`https://dummyjson.com/posts/${id}`)
      .pipe(
        switchMap((post) =>
          this.http
            .get<any>(`https://dummyjson.com/users/${post.userId}`)
            .pipe(map((user) => ({ ...post, user }))),
        ),
      );
  }

  getCommentsByPostId(id: number): Observable<any[]> {
    return this.http
      .get<any>(`https://dummyjson.com/post/${id}/comments`)
      .pipe(map((res) => res.comments as any[]));
  }
}
