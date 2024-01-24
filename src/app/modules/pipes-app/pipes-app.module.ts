import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAppRoutingModule } from './pipes-app-routing.module';

import { AtomsModule } from '@app/shared/components/atoms/atoms.module';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';

import { PipesMainComponent } from './pages/pipes-main/pipes-main.component';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '@app/shared/prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pages/pipes/toggle-case.pipe';



@NgModule({
  declarations: [
    PipesMainComponent,
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PipesAppRoutingModule,
    AtomsModule,
    MoleculesModule,
  ]
})
export class PipesAppModule { }
