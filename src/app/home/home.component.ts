import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  redirectToUsers() {
    this.router.navigate(['/users']);
  }
  redirectToPosts() {
    this.router.navigate(['/posts']);
  }

  redirectToProducts() {
    this.router.navigate(['/products']);
  }
}
