import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '@app/core/services/countries/countries.service';
import { switchMap } from 'rxjs';
import { Country, Currencies, Languages, Translation } from '@app/modules/countries/interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  public translations?: Translation[];
  public languajes?: Languages[];
  public currencies: Currencies[] = [];

  constructor(  private activatedRoute: ActivatedRoute,
                private countriesService: CountriesService,
                private router: Router
              ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe( (country) => {
         if(!country) return this.router.navigateByUrl('countries/main/by-capital');

         const monedas = Object.values(country.currencies);

         this.translations = Object.values(country.translations);
         this.languajes = Object.values(country.languages);

         for (let index = 0; index < monedas.length; index++) {
          console.log(monedas[index].name);
          this.currencies.push(monedas[index].name);
        }

         return this.country = country;
         //return;
      })
  }

}
