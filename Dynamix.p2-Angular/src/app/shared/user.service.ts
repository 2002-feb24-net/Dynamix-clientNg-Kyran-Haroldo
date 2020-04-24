import { Injectable } from '@angular/core';
import { User } from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loggedIn:boolean = false;
  formData : User;
  list: User[];
  readonly rootURL = "https://dynamix.azurewebsites.net/api"

  constructor(private _http: HttpClient) { }

  refreshList(){
    // this._http.get(this.rootURL+'/Users')
    // .toPromise().then(res => this.list = res as User[]);
    return this._http.get<User[]>(this.rootURL+'/Users');
  }

  async postUsers(formData: User){
    return this._http.post(this.rootURL+'/Users',formData);
  }

  async putEmployee(formData : User){
    return this._http.put(this.rootURL+'/Users/'+formData.UserId,formData);

   }

   async deleteEmployee(id : number){
    return this._http.delete(this.rootURL+'/Users/'+id);
   }

   async getUser(username:string) {
    return this._http.get<User[]> (
      this.rootURL+"/Users"+username,httpOptions).toPromise();
  }

  async addUser(user:User) {
    console.log(user);
    return this._http.post<User> (
      this.rootURL,JSON.stringify(user),httpOptions).toPromise();
  }

}
