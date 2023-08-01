import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PipesAppRoutingModule } from './pipes-app-routing.module';
import { PipesMainComponent } from './pages/pipes-main/pipes-main.component';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';



@NgModule({
  declarations: [
    PipesMainComponent
  ],
  imports: [
    CommonModule,
    PipesAppRoutingModule,
    MoleculesModule,
  ]
})
export class PipesAppModule { }
