import { Component } from '@angular/core';
import { Country } from '@app/modules/countries/interfaces/country.interface';
import { CountriesService } from '@app/core/services/countries/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.scss']
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  typeSearch = 'name';

  constructor(private countriesService: CountriesService) {

  }

  searchByCountry(termino: string) {
    this.countriesService.searchCountry(termino, this.typeSearch)
      .subscribe(countries => {
        this.countries = countries;
        console.log(countries);
      })
  }
}
