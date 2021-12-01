import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserSubscribe } from '../models/usersubscribe';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  
  currentUser = new UserSubscribe();
  user = new UserSubscribe();
  message:string;
  myForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      'newusername': new FormControl('',Validators.required),
      'newpassword': new FormControl('',Validators.required),
      'confnewpass': new FormControl('',Validators.required),
    
    })


    //console.log(this.activatedRoute.snapshot.params.username);
    this.currentUser = this.userService.consulterUser(this.activatedRoute.snapshot.params.username);
    console.log(this.currentUser);
  
  }
   
  updateUser(){
    console.log(this.currentUser);
    let conf=confirm("Are you sure?");
    if(conf){
    this.userService.updateuser(this.currentUser);
    this.message= "Hi "+this.currentUser.lastname+" "+this.currentUser.firstname+"! your username and password have been changed.";
  }
}

}
 