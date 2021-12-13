import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class UserService {
   users! : User[];
   user!: User;
   url ='http://localhost:3000/users/';

 
  constructor(private http: HttpClient) {
   /*
    this.users = [
      {firstname:"raed",lastname:"jaidi",username:"raedjaidi",
      birthdate: new Date("07/11/1996"),email:"raed.jaidi@esprit.tn",
      password:"12345azer",confpass:"12345azer",roles:"ADMIN"},

      {firstname:"mohamed",lastname:"jaidi",username:"mohamedjaidi",
      birthdate: new Date("07/11/2000"),email:"mohamed.jaidi@esprit.tn",
      password:"12345azer",confpass:"12345azer",roles:"USER"},

      {firstname:"wael",lastname:"jaidi",username:"waeljaidi",
      birthdate: new Date("07/11/1996"),email:"wael.jaidi@esprit.tn",
      password:"12345azer",confpass:"12345azer",roles:"ADMIN"},
 ];  */
      
   }  
   consulterUser(username:string):Observable<User> {
    const url = `${this.url}/${username}`;
    return this.http.get<User>(url);
    }
  
      getUsersWS():Observable<User[]>{
      return this.http.get<User[]>(this.url,httpOptions)
    }
    postUserWS(user: User):Observable<User>{
      return this.http.post<User>(this.url,user,httpOptions);
    }
    deleteUserWS(id:string):Observable<User>{
      return this.http.delete<User>(this.url + id,httpOptions);
  }
  updateUserWs(user: User) :Observable<User>
  {
  return this.http.put<User>(this.url+user.id, user,httpOptions);
  }
  
  getStatUser(list: any[],critere: string, value:any){
     let n = 0;
     for (let i in list){
       if(list[i][critere]===value){
         n++;
       }
     }
     return n;
  }
   
} 
 