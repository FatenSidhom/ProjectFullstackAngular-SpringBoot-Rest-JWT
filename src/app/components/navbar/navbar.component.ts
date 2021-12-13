import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  notif:boolean=false;
  list:boolean=false;
  navitem:boolean=true;
  constructor() { }

  ngOnInit(): void {
    const ch = JSON.parse(localStorage.getItem('isloggedIn') || '{}');
    if(ch===true){
      this.navitem=false;
    }
  }
  @HostListener('window:scroll',['$event']) onscroll() {
    if(window.scrollY > 300) {
      this.notif= true;
    }
    else {
      this.notif=false;
    }
  }
  onclicky() {
    this.list=!this.list;
  }
}
