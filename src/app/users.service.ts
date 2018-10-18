import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(userId: string) {
    const path = `http://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.get(path);
  }
}
