import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroeComponent } from './heroe/heroe.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    HeroeComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
