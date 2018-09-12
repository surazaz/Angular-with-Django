import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(private http: HttpClient, private _userService: UserService) {
  }
    list() {
    return this.http.get('/api/users');
  }
  // send a POST request to the API to create a new data object
  create(user, token) {
    return this.http.post('api/user-creation', JSON.stringify(user), this.getHttpOptions());
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

}
