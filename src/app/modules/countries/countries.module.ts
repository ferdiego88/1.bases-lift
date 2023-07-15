import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesMainComponent } from './pages/countries-main/countries-main.component';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { AtomsModule } from '@app/shared/components/atoms/atoms.module';


@NgModule({
  declarations: [
  CountriesMainComponent,
  ByCapitalPageComponent,
  ByCountryPageComponent,
  ByRegionPageComponent,
  CountryPageComponent,
  CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    AtomsModule,
    MoleculesModule,
  ]
})
export class CountriesModule { }
