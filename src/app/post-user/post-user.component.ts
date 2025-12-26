import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-user',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './post-user.component.html',
  styleUrl: './post-user.component.css'
})
export class PostUserComponent {
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }
  posts: any[] = [];

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const userId = Number(params['userId']);
    
      this.usersService.getUserPosts(userId).subscribe((data: any) => {
        for (let post of data) {
          this.posts.push(post);
        }
        console.log(this.posts);
      });
    });
  }

  redirectToPost(postId: number) {
    this.router.navigate(['/post'], { queryParams: { id: postId } });
  }

}
