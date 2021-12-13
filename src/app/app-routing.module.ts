import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './dashboard/hello/hello.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ControllerGuard } from './security/controller.guard';
import { IsSignedInGuard } from './security/is-signed-in.guard';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '',component:LandingpageComponent},
  {path:'dashboard',loadChildren:
  ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)  
  ,canActivate:[ControllerGuard]},
  {path:'forbidden',component:ForbiddenComponent},
  { path: 'login', component:LoginComponent,canActivate:[IsSignedInGuard]},
  { path: 'signup', component:SignupComponent,canActivate:[IsSignedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
