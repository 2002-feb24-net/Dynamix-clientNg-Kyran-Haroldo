import { UserService } from 'src/app/shared/user.service';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    public userService: UserService

  ) { }

  ngOnInit() {
    this.getUsers();

  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.refreshList()
    .subscribe(users =>{ this.users = users; console.log(users)});
  }

  // add(name: string): void {
  //    name = name.trim();
  //   if (!name) { return; }
  //   this.userService.postUsers({ FullName } as User)
  //     .subscribe(user => {
  //       this.users.push();
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }



}
