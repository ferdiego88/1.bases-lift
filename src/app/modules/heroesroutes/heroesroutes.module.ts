import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeroesComponent } from './pages/main-heroes/main-heroes.component';
import { HeroesRoutesRoutingModule } from './heroesroutes.routing';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';



@NgModule({
  declarations: [
    MainHeroesComponent,
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutesRoutingModule,
  ]
})
export class HeroesroutesModule { }
