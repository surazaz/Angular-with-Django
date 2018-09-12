import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {throwError} from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user: any;
public new_user: any;
public myvariable="hello";


  constructor(private _userService: UserService) {
   }

  ngOnInit() {
    this.new_user = {};
    this.user = {
      email: '',
      password: ''
    };
  }
  login() {
    this._userService.login({'email': this.user.email, 'password': this.user.password});
  }

  refreshToken() {
    this._userService.refreshToken();
  }

  logout() {
    this._userService.logout();
  }



}
