import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesMainComponent } from './pages/countries-main/countries-main.component';
import { CountriesHomePageComponent } from './pages/countries-home-page/countries-home-page.component';
import { CountriesAboutComponent } from './pages/countries-about/countries-about.component';
import { CountriesContactComponent } from './pages/countries-contact/countries-contact.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
  { path: 'main', component: CountriesMainComponent,
    children: [
      { path:'home',    component: CountriesHomePageComponent },
      { path:'about',   component: CountriesAboutComponent },
      { path:'contact', component: CountriesContactComponent },
      { path:'by-capital', component: ByCapitalPageComponent },
      { path:'by-country', component: ByCountryPageComponent },
      { path:'by-region',  component: ByRegionPageComponent },
      { path:'by/:id',  component: CountryPageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
