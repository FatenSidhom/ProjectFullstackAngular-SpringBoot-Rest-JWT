import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../models/role';
import { UserLogin } from '../models/userlogin';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
}) 
export class AuthService {

  /*  users: UserLogin[] = [
          {"username":"raedjaidi","password":"123raed","roles":["ADMIN"]},
           {"username":"raed","password":"123raed","roles":["USER"]}]; */


           apiURL:string ='http://localhost:8081/SpringMVC/servlet//login';
           public loggedUser:string;
            public isloggedIn: Boolean = false;
           public roles:Role[];
           token:string;
  
  constructor(private router: Router, private http: HttpClient) { }

        getUserFromDB(username:string):Observable<UserLogin>{
          const url = `${this.apiURL}/${username}`
          return this.http.get<UserLogin>(url);
        }

        
       login(user : UserLogin)
            {
                   return this.http.post<UserLogin>(this.apiURL+'/login', user , {observe:'response'});
             }         

         saveToken(jwt:string){
         localStorage.setItem('jwt',jwt);
         this.token = jwt;
        this.isloggedIn = true; 
        
           }
           loadToken() {
            this.token = localStorage.getItem('jwt');
         
          }
        
          getToken():string {
            return this.token;
          }
  /*
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
  }   */

  signIn(user:UserLogin){
    this.loggedUser=user.username;
    this.isloggedIn=true;
    this.roles=user.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    } 
  
    
  logout() { 
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
  } 

  
   /* 
  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return (this.roles.indexOf('ADMIN') >-1);
   
  } */
 
  isAdmin():Boolean{
    let admin:Boolean=false;
    if (!this.roles)
    //this.roles==undefiened
    return  false;
    this.roles.forEach((curRole) =>{
      if(curRole.role=='ADMIN'){
    admin =true;
    }
  });
    return admin;
}

setLoggedUserFromLocalStorage(login : string) {
  this.loggedUser = login;
  this.isloggedIn = true;
 this.getUserRoles(login);
}

   getUserRoles(username :string){    
  this.getUserFromDB(username).subscribe((user:UserLogin)=>{
    this.roles=user.roles;

  });
  
}
}
 