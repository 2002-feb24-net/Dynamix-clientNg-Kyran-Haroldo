import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ReviewServiceService} from 'src/app/shared/review-service.service';
import {ReviewComponent} from 'src/app/reviews/review/review.component';
import { Review } from 'src/app/shared/review.model';


@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
reviews: Review[];
selectedReview: Review;

  constructor(
    public service: ReviewServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getReviews();
  }
  onSelect(review: Review): void {
    this.selectedReview = review;
  }

  getReviews(): void {
     this.service.refreshList()
    .subscribe(reviews =>{ this.reviews = reviews; console.log(reviews)});
  }


  populateForm(emp: Review) {
    this.service.formData = Object.assign({}, emp);
  }

  async onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      (await this.service.deleteEmployee(id)).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }
}
