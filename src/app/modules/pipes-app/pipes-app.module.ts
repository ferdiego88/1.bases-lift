import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PipesAppRoutingModule } from './pipes-app-routing.module';
import { PipesMainComponent } from './pages/pipes-main/pipes-main.component';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';



@NgModule({
  declarations: [
    PipesMainComponent,
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent
  ],
  imports: [
    CommonModule,
    PipesAppRoutingModule,
    MoleculesModule,
  ]
})
export class PipesAppModule { }
