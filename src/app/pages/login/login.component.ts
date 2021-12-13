import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../sharedservices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  usr!:User[];
  myForm!: FormGroup;
  error =0;
  err:number =0;
   
  constructor(private authService : AuthService,public router: Router) { }
    
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
  // console.log(this.user.username);
  this.authService.getUserFromDB(this.user.username).subscribe((data:any[])=>
  {
    this.usr=data;
    console.log(this.usr);
  if(this.usr[0].password==this.user.password)
  {
    // this.authService.signIn(usr);
    this.authService.setLoggedUserFromLocalStorage(this.usr[0]);
      this.router.navigate(['/dashboard']);
    }
    else
    console.log("error")
  });
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
