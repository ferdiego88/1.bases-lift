import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg Modules
import { ButtonModule } from 'primeng/button';

import { PipesAppRoutingModule } from './pipes-app-routing.module';
import { PipesMainComponent } from './pages/pipes-main/pipes-main.component';

const primeNgModules = [
   ButtonModule,
]

@NgModule({
  declarations: [
    PipesMainComponent
  ],
  imports: [
    CommonModule,
    PipesAppRoutingModule,
    primeNgModules,
  ]
})
export class PipesAppModule { }
