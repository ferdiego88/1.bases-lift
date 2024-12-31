import { Component, OnInit } from '@angular/core';
import { CountriesService } from '@app/core/services/countries/countries.service';
import { Country } from '@app/modules/countries/interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.scss']
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue = '';

  typeSearch = 'name';

  constructor(private readonly countriesService: CountriesService) {

  }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(termino: string) {
    this.countriesService.searchCountry(termino, this.typeSearch)
      .subscribe(countries => {
        this.countries = countries;
        console.log(countries);
      })
  }
}
