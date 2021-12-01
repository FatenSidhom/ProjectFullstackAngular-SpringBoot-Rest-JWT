import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../models/userlogin';

@Injectable({
  providedIn: 'root'
}) 
export class AuthService {

  users: UserLogin[] = [
           {"username":"raedjaidi","password":"123raed","roles":["ADMIN"]},
           {"username":"raed","password":"123raed","roles":["USER"]}];

           public loggedUser:string;
            public isloggedIn: Boolean = false;
           public roles:String[];
  
  constructor(private router: Router) { }

         SignIn(user :UserLogin):Boolean{
        let validUser: Boolean = false; 
        this.users.forEach((curUser) => {
        if(user.username=== curUser.username && user.password==curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;  
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
        }
        });

     return validUser;
  }

  logout() { 
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return (this.roles.indexOf('ADMIN') >-1);
   
  }
}
 