import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../models/userlogin';
import { AuthService } from '../services/auth.service';


 

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  user = new UserLogin();
  myForm: FormGroup;
  error =0;
  err:number =0;
   
  constructor(private authService : AuthService,
    public router: Router) { }
    
  ngOnInit(): void { 
    this.myForm = new FormGroup({
      'username': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      
    })
  
  }
  /*
 onLoggedin(){
   console.log(this.user)
   let isValidUser: Boolean = this.authService.SignIn(this.user);
   console.log("valid user "+isValidUser);
   if (isValidUser)
   {

     this.router.navigate(['/dashbord']);     
   }
     else
       //alert("Login or password invalid!");
       this.error = 1;
 }  */
 onLoggedin(){
  this.authService.getUserFromDB(this.user.username).subscribe((usr:UserLogin)=>
  {
  if(usr.password==this.user.password)
  {
    this.authService.signIn(usr);
    this.router.navigate(['/dashbord']);
    }
    else
    this.error =1;},(err) =>console.log(err));
  } 
   /*
   this.authService.login(this.user).subscribe((data)=> {
    let jwToken = data.headers.get('Authorization');
    this.authService.saveToken(jwToken);
    this.router.navigate(['/dashbord']);              
  },(err)=>{   this.err = 1;
});

}*/
}