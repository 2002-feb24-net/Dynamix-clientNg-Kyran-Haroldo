import { LocationComponent } from './location/location.component';
import { CommentComponent } from './comment/comment.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AboutComponent } from './about/about.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { UploadComponent } from './home/upload/upload.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SignInComponent } from './users/sign-in/sign-in.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'Account', component: UsersComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'about', component: AboutComponent},
  {path: 'rate', component: ReviewsComponent},
  {path: 'login', component: SignInComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'comment', component: CommentComponent},
  {path: 'location', component: LocationComponent},
  {path: '**', component: HomeComponent} // all invalid url arguments go to home
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]

})

export class AppRoutingModule {}
export const routingComponents = [DashboardComponent, HomeComponent, UsersComponent, SignUpComponent, UploadComponent, ReviewsComponent]
