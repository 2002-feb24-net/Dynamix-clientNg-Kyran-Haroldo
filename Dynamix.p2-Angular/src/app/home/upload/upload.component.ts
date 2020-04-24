import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/shared/upload-image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [UploadImageService]
})
export class UploadComponent implements OnInit {
imageUrl: string = "https://www.pdxcityclub.org/wp-content/plugins/fundlycrm/assets/images/default-donation.jpg";
fileToUpload: File = null;
  constructor() { }

  ngOnInit(): void {
  }



}
