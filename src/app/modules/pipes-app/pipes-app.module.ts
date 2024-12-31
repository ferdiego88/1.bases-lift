import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesAppRoutingModule } from './pipes-app-routing.module';

import { AtomsModule } from '@app/shared/components/atoms/atoms.module';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';

import { PrimeNgModule } from '@app/shared/prime-ng/prime-ng.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PipesMainComponent } from './pipes-main/pipes-main.component';
import { CanFlyPipe } from './pipes/canFly.pipe';
import { SortByPipe } from './pipes/sortBy.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';



@NgModule({
  declarations: [
    PipesMainComponent,
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
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
