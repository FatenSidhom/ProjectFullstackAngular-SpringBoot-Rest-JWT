import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    HelloComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    HelloComponent
  ]
})
export class DashboardModule { }
