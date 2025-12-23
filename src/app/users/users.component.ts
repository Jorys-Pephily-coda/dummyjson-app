import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(private usersService: UsersService) { }

  users: any[] = [];

  ngOnInit() {
    this.usersService.getAllUsers().then(users => {
      for (let user of users) {
        this.users.push(user);
      }
    });
  }

}
