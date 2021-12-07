import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SubscribeUserComponent } from '../ModuleUser/subscribe-user/subscribe-user.component';
import { LoginUserComponent } from '../ModuleUser/login-user/login-user.component';
import { ListInformationUserComponent } from '../ModuleUser/list-information-user/list-information-user.component';
import { ForbiddenComponent } from '../ModuleUser/security/forbidden/forbidden.component';
import { ControlbyguardGuard } from '../ModuleUser/security/controlbyguard.guard';
import { UpdateAdminComponent } from '../ModuleUser/update-admin/update-admin.component';
import { DashbordComponent } from '../ModuleUser/dashbord/dashbord.component';
import { ProfilComponent } from '../ModuleUser/profil/profil.component';


const ROUTES: Routes = [
   {path : "subscribe",component: SubscribeUserComponent } ,
   {path : "login",component: LoginUserComponent },
  {path : "dashbord",component: DashbordComponent, canActivate:[ControlbyguardGuard]},
   {path : "listuser",component: ListInformationUserComponent },
   {path:  'forbidden', component: ForbiddenComponent},
   {path:  'profil', component: ProfilComponent},
   {path: "update/:username", component: UpdateAdminComponent},
   {path: "", redirectTo: "users", pathMatch: "full" }

]    
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
