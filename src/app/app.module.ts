import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeUserComponent } from './ModuleUser/subscribe-user/subscribe-user.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginUserComponent } from './ModuleUser/login-user/login-user.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ListInformationUserComponent } from './ModuleUser/list-information-user/list-information-user.component';
import { ForbiddenComponent } from './ModuleUser/security/forbidden/forbidden.component';
import { UpdateAdminComponent } from './ModuleUser/update-admin/update-admin.component';
import { DashbordComponent } from './ModuleUser/dashbord/dashbord.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilComponent } from './ModuleUser/profil/profil.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    HomeComponent,
    FooterComponent,
    SubscribeUserComponent,
    LoginUserComponent,
    ListInformationUserComponent,
    ForbiddenComponent,
    UpdateAdminComponent,
    DashbordComponent,
    ProfilComponent,
   
 
  
 
   

     
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
