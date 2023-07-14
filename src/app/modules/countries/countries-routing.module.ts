import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesMainComponent } from './pages/countries-main/countries-main.component';
import { CountriesHomePageComponent } from './pages/countries-home-page/countries-home-page.component';
import { CountriesAboutComponent } from './pages/countries-about/countries-about.component';

const routes: Routes = [
  { path: 'main', component: CountriesMainComponent,
    children: [
      { path:'home', component: CountriesHomePageComponent },
      { path:'about', component: CountriesAboutComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
