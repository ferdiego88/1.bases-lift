import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonBallZRoutingModule } from './dragon-ball-z-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { OrganismsModule } from '@app/shared/components/organisms/organisms.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    DragonBallZRoutingModule,
    OrganismsModule,
  ]
})
export class DragonBallZModule { }
