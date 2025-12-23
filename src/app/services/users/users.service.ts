import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  testApi() {
    fetch('https://dummyjson.com/test')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  getAllUsers(){
    return fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => data.users);
  }

  getUserById(id: number){
    return fetch(`https://dummyjson.com/users/${id}`)
      .then(response => response.json())
      .then(data => data);
    }

}