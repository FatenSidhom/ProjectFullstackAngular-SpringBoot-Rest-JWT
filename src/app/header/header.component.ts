import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserSubscribe } from '../ModuleUser/models/usersubscribe';
import { AuthService } from '../ModuleUser/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users: UserSubscribe[];
  constructor(public authService: AuthService,private route: ActivatedRoute) { }
   
  ngOnInit(): void {
  }
  onLogout(){
    this.authService.logout();
  }
}

