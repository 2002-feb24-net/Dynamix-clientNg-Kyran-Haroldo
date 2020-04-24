import { CommentService } from './shared/comment.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { UploadComponent } from './home/upload/upload.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewListComponent } from './reviews/review-list/review-list.component';
import { ReviewComponent } from './reviews/review/review.component';
import { ReviewServiceService } from './shared/review-service.service';
import { CommentComponent } from './comment/comment.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    routingComponents,
    UserComponent,
    UserListComponent,
    SignInComponent,
    SignUpComponent,
    UploadComponent,
    AboutComponent,
    ReviewsComponent,
    ReviewListComponent,
    ReviewComponent,
    CommentComponent,
    LocationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule .forRoot()
  ],
  providers: [UserService, ReviewServiceService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
