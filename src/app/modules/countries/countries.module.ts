import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesHomePageComponent } from './pages/countries-home-page/countries-home-page.component';
import { CountriesAboutComponent } from './pages/countries-about/countries-about.component';
import { CountriesMainComponent } from './pages/countries-main/countries-main.component';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';
import { CountriesContactComponent } from './pages/countries-contact/countries-contact.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';


@NgModule({
  declarations: [
  CountriesHomePageComponent,
  CountriesAboutComponent,
  CountriesMainComponent,
  CountriesContactComponent,
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
