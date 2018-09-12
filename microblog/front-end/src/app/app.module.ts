import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { BlogPostService } from './blog-post.service';
import { RegistrationService } from './registration.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from  './app-routing.module';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserprofileComponent
  ],
 imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [UserService,BlogPostService,RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
