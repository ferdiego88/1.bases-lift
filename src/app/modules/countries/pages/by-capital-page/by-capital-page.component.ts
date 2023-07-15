import { Component } from '@angular/core';
import { CountriesService } from '@app/core/services/countries/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  typeSearch = 'capital';

  constructor(private countriesService: CountriesService) {

  }

  searchByCapital(termino: string) {
    this.countriesService.searchCountry(termino, this.typeSearch)
      .subscribe(countries => {
        this.countries = countries;
        console.log(countries);
      })
  }
}
