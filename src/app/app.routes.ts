import { Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { DetailsComponent } from "./details/details.component";
import { PostUserComponent } from "./post-user/post-user.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { PostComponent } from "./pages/post/post.component";
import { HomeComponent } from "./home/home.component";
import { ListProductsComponent } from "./products/list-products/list-products.component";
import { DetailProductComponent } from "./products/detail-product/detail-product.component";
import { FormComponent } from "./products/form/form.component";

export const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "users", component: UsersComponent },
  { path: "details", component: DetailsComponent },
  { path: "posts/user", component: PostUserComponent },
  { path: "posts", component: PostsComponent },
  { path: "post", component: PostComponent },
  { path: "products", component: ListProductsComponent },
  { path: "product", component: DetailProductComponent },
  { path: "products/add", component: FormComponent },
  { path: "products/edit", component: FormComponent }
];
