import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Review} from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {
formData: Review;
list: Review[];
readonly rootURL = "https://dynamix.azurewebsites.net/api"

  constructor(private _http: HttpClient) { }

  refreshList(){
    return this._http.get<Review[]>(this.rootURL+'/Reviews')
    ;
  }

  postUsers(formData: Review){
    return this._http.post<Comment>(`${this.rootURL}/Reviews/`, formData);

  }

  putEmployee(formData : Review){
    return this._http.put(this.rootURL+'/Reviews'+formData.ReviewID,formData);

   }

   deleteEmployee(id : number){
    return this._http.delete(this.rootURL+'/Reviews'+id);
   }
}
