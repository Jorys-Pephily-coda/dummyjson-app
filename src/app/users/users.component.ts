import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(private usersService: UsersService, private router: Router) { }

  users: any[] = [];

  ngOnInit() {
    this.usersService.getAllUsers().then(users => {
      for (let user of users) {
        this.users.push(user);
      }
      console.log(this.users);
    });
  }

  onClick(userid: number) {
    this.router.navigate(['/details', userid]);
  }

}
