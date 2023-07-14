import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesHomePageComponent } from './pages/countries-home-page/countries-home-page.component';
import { CountriesAboutComponent } from './pages/countries-about/countries-about.component';
import { CountriesMainComponent } from './pages/countries-main/countries-main.component';


@NgModule({
  declarations: [
  CountriesHomePageComponent,
  CountriesAboutComponent,
  CountriesMainComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
