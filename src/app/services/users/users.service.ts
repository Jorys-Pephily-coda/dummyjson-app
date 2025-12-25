import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getAllUsers(){
    return this.http.get<any>('https://dummyjson.com/users');
  }

  getUserById(id: number){
    return this.http.get<any>(`https://dummyjson.com/users/${id}`);
  }

  getUserPosts(userId: number){
    return this.http
      .get<any>(`https://dummyjson.com/users/${userId}/posts`)
      .pipe(map(res => res.posts as any[]));
  }

}