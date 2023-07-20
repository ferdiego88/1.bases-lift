import { Component } from '@angular/core';
import { Country } from '@app/modules/countries/interfaces/country.interface';
import { CountriesService } from '@app/core/services/countries/countries.service';

type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  typeSearch = 'region';
  public selectedRegion?: Region;

  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  constructor(private countriesService: CountriesService) {

  }

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchCountry(region, this.typeSearch)
      .subscribe(countries => {
        this.countries = countries;
        console.log(countries);
      })
  }
}
