import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@app/core/core.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
