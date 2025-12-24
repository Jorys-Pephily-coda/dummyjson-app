import { Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { DetailsComponent } from "./details/details.component";
import { PostUserComponent } from "./post-user/post-user.component";
import { PostsComponent } from "./pages/posts/posts.component";

export const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "posts/:userId", component: PostUserComponent },
  { path: "posts", component: PostsComponent },
];
