import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ReviewServiceService} from 'src/app/shared/review-service.service';
import { Review } from 'src/app/shared/review.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(
    public service: ReviewServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }


}
