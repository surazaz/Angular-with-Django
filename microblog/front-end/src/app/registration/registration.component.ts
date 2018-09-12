import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {throwError} from 'rxjs';  // Angular 6/RxJS 6


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	public new_user: any;
  public users;


  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  	this.new_user = {};


  }
  getUsers() {
    this._apiService.user_list().subscribe(
      // the first argument is a function which runs on success
      data => {
        this.users = data;
        // convert the dates to a nice format
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading users')
    );
  }
      createUser() {
    this._apiService.user_create(this.new_user).subscribe(
       data => {
         this.getUsers();
         return true;

       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );
  }

}
