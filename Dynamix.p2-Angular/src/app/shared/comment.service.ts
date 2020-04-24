import { User } from 'src/app/shared/user.model';
import { Comment } from './comment.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  formData : Comment;
  list: Comment[];
  readonly rootURL = "https://dynamix.azurewebsites.net/api"

  constructor(private http: HttpClient) { }

  getComment() {
    return this.http.get<Comment[]>(`${this.rootURL}/Comments`)
      ;
  }
  getCommentById()
  {
   return this.http.get<Comment>(`${this.rootURL}/Comments/` + this.formData.CommentID);
  }
  PostComment(formData:Comment){
    return this.http.post<Comment>(`${this.rootURL}/Comments/`, formData);

  }
  getCommentUpdateById(id : number)
  {
   return this.http.get<Comment>(`${this.rootURL}api/Comments/${id}`)
   ;
  }
 UpdateComment(comment: Comment){
  return this.http.put<Comment>(`${this.rootURL}Comments/${comment.CommentID}`, comment)
  ;
 }
  refreshList(){
   this.http.get<Comment>(`${this.rootURL}/Comments`)
 }

}


