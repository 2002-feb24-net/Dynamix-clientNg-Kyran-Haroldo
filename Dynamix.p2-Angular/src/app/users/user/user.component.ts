import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user: User;
emailPattern: "^[a-z0-9._%]"
  constructor(
    public service: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
    form.resetForm();
  this.service.formData = {
    UserId: null,
    fullName: '',
    Email: '',
    Username: '',
    Password: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.UserId == null)
    this.insertRecord(form);
  else
    this.updateRecord(form);

    // put redirect here on submit to login page to prevent duplicate accounts being made (by users who think thier account registration didn't save to database)

  }

  async insertRecord(form: NgForm){
    (await this.service.postUsers(form.value)).subscribe(res => {
      this.toastr.success('Success!', 'Account Created');
      this.resetForm(form);
      this.service.refreshList();
  });
  }

  async updateRecord(form: NgForm) {
    (await this.service.putEmployee(form.value)).subscribe(res => {
      this.toastr.info('Updated Successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}
