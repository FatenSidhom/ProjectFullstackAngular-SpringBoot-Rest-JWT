import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserSubscribe } from '../models/usersubscribe';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-list-information-user',
  templateUrl: './list-information-user.component.html',
  styleUrls: ['./list-information-user.component.css']
})
export class ListInformationUserComponent implements OnInit {

users: UserSubscribe[];

  constructor(private route: ActivatedRoute,private userService: UserService,public authService: AuthService) {
  this.users=  userService.listUser();
 }

  ngOnInit(): void {
 
  }
  deleteUser(user:UserSubscribe){
    console.log(user);
    let conf=confirm("Are you sure?");
    if(conf)
    this.userService.SuppUser(user);

  }
}
