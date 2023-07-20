import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesAppRoutingModule } from './pipes-app-routing.module';
import { PipesMainComponent } from './pages/pipes-main/pipes-main.component';


@NgModule({
  declarations: [
    PipesMainComponent
  ],
  imports: [
    CommonModule,
    PipesAppRoutingModule
  ]
})
export class PipesAppModule { }
