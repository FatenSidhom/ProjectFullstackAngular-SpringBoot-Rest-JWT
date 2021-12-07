import { Injectable } from '@angular/core';
import { UserSubscribe } from '../models/usersubscribe';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : UserSubscribe [];
  user: UserSubscribe;
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
  /*
   listUser():UserSubscribe []{
     return this.users;
   }
    SuppUser(user:UserSubscribe){
     const index = this.users.indexOf(user,0);
     if(index > -1){
       this.users.splice(index,1);
     }
   }*/
  
   pushUser(user:UserSubscribe){
   
       this.users.push(user);
   }

  

   consulterUser( username: string): UserSubscribe  {
    this.user = this.users.find(u =>u.username == username)
    return this.user;
    }

    updateuser(user:UserSubscribe){
         // this.SuppUser(user);
          this.pushUser(user);
    }

    getUsersWS(){
      return this.http.get<UserSubscribe[]>('http://localhost:3000/users')
    }

    deleteUserWS(id){
        return this.http.delete(this.url + id);
    }

    postUserWS(user: UserSubscribe){
      return this.http.post(this.url,user);
    }
} 
 