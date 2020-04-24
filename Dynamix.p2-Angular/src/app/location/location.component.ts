import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(
    public locationService: LocationService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
    form.resetForm();
  this.locationService.formData = {
    LocationID: null,
    City: 'Las Vegas',
    State: 'Nevada',
    Country: 'USA',
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.UserId == null)
    this.insertRecord(form);
  else
    this.updateRecord(form);

  }

  async insertRecord(form: NgForm){
    (await this.locationService.postLocations(form.value)).subscribe(res => {
      this.toastr.success('Success!', 'Location Submitted');
      this.resetForm(form);
      this.locationService.refreshList();
  });
  }

  async updateRecord(form: NgForm) {
    (await this.locationService.updateLocation(form.value)).subscribe(res => {
      this.toastr.info('Updated Successfully', 'EMP. Register');
      this.resetForm(form);
      this.locationService.refreshList();
    });
  }

}
