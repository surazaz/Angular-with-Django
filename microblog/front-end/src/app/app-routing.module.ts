import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import {LoginComponent} from  './login/login.component';
import {RegistrationComponent} from  './registration/registration.component';
import {UserprofileComponent} from  './userprofile/userprofile.component';




const routes: Routes = [
{ path:  '', redirectTo:  'login', pathMatch:  'full' },
{
    path:  'login',
    component:  LoginComponent
},
{
    path:  'register',
    component:  RegistrationComponent
},
{
    path:  'profile',
    component:  UserprofileComponent
},



];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
    exports: [RouterModule]

})
export class AppRoutingModule {
 }
