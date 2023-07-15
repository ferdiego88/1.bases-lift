import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '@app/core/services/countries/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  typeSearch = 'region';

  constructor(private countriesService: CountriesService) {

  }

  searchByRegion(termino: string) {
    this.countriesService.searchCountry(termino, this.typeSearch)
      .subscribe(countries => {
        this.countries = countries;
        console.log(countries);
      })
  }
}
