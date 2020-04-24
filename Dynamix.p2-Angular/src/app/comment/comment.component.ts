import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CommentService } from '../shared/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(
    public commentService: CommentService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
    form.resetForm();
  this.commentService.formData = {
    CommentID: null,
    CommentText: '',
    ReviewID: 1,
    UserID: 1
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.UserId == null)
    this.insertRecord(form);
  else
    this.updateRecord(form);

  }

  async insertRecord(form: NgForm){
    this.commentService.PostComment(form.value).subscribe(res => {
      this.toastr.success('Success!', 'Comment Submitted');
      this.resetForm(form);
      this.commentService.refreshList();
  });
  }

  async updateRecord(form: NgForm) {
    this.commentService.UpdateComment(form.value).subscribe(res => {
      this.toastr.info('Updated Successfully', 'EMP. Register');
      this.resetForm(form);
      this.commentService.refreshList();
    });
  }

}
