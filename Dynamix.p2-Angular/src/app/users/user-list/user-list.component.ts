import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users: User[];
selectedUser: User;
  constructor(
    public service: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.service.refreshList()
    .subscribe(users =>{ this.users = users; console.log(users)});
  }

  populateForm(emp: User) {
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
