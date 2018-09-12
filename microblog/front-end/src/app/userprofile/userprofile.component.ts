import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

public posts;
  public new_post:any;



  constructor( private _apiService: ApiService) { }
 

  ngOnInit() {
    this.getPosts();
    this.new_post = {};

  }
  




  getPosts() {
    this._apiService.post_list().subscribe(
      // the first argument is a function which runs on success
      data => {
        this.posts = data;
        // convert the dates to a nice format
        for (let post of this.posts) {
          post.date = new Date(post.date);
        }
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading posts')
    );
  }

  createPost() {
    this._apiService.post_create(this.new_post).subscribe(
       data => {
         // refresh the list
         this.getPosts();
         return true;
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );

}
}
