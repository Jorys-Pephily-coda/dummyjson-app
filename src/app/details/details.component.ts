import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  user: any = null;
  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUserById(userId).then(data => {
      this.user = data;
      console.log(this.user);
    });
  }

  onClick(){
    this.router.navigate(['/posts/user', this.user.id]); 
  }

}
