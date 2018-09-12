import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from  '@angular/common/http';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
	public API_URL  =  '/api/';

  constructor(private  http:HttpClient, private _userService:UserService) { 
  }
   // helper function to build the HTTP headers
  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
  }

  post_list() {
    return this.http.get(this.API_URL+'posts');
  }

  // send a POST request to the API to create a new data object
  post_create(post) {
    return this.http.post(this.API_URL+'posts', JSON.stringify(post), this.getHttpOptions());
  }

  user_list() {
    return this.http.get(this.API_URL+'users');
  }
  // send a POST request to the API to create a new data object
  user_create(user) {
    return this.http.post(this.API_URL+'user-creation', JSON.stringify(user), this.getHttpOptions());
  }

 
}
