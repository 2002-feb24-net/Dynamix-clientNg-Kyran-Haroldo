import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReviewServiceService } from 'src/app/shared/review-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(
    public service: ReviewServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form != null)
    form.resetForm();
  this.service.formData = {
    ReviewID: null,
    Title: '',
    ReviewText: '',
    ReviewImageURL: '',
    RatingEmojiID: 1,
    LocationID: 1,
    CreatorUserID: 1

    }
  }

  onSubmit(form: NgForm) {
    if (form.value.ReviewID == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);

    // put redirect here on submit to login page to prevent duplicate accounts being made (by users who think thier account registration didn't save to database)

  }

  insertRecord(form: NgForm){
    this.service.postUsers(form.value).subscribe(res => {
      this.toastr.success('Success!', 'Review Created');
      this.resetForm(form);
      this.service.refreshList();
  });
  }

  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info('Updated Successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }


}
