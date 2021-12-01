import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSubscribe } from '../models/usersubscribe';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-subscribe-user',
  templateUrl: './subscribe-user.component.html',
  styleUrls: ['./subscribe-user.component.css']
})
export class SubscribeUserComponent implements OnInit {
  
  myForm: FormGroup;
  newUserSubscribe = new UserSubscribe();
   messageForUser:string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {


    this.myForm = new FormGroup({
      'firstname': new FormControl('',Validators.required),
      'lastname': new FormControl('',Validators.required),
      'username': new FormControl('',Validators.required),
      'birthday': new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      'confpass': new FormControl('',Validators.required),
   
    })
  }
 
addUser(){
     console.log(this.newUserSubscribe);
     this.userService.pushUser(this.newUserSubscribe);
     this.messageForUser= "Welcome " + this.newUserSubscribe.lastname +" " +this.newUserSubscribe.firstname+ ",your account was created!";
}

}
 