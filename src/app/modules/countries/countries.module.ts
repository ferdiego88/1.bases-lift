import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesMainComponent } from './pages/countries-main/countries-main.component';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';


@NgModule({
  declarations: [
  CountriesMainComponent,
  ByCapitalPageComponent,
  ByCountryPageComponent,
  ByRegionPageComponent,
  CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MoleculesModule,
  ]
})
export class CountriesModule { }
