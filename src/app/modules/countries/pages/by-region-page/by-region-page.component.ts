import { Component, OnInit } from '@angular/core';
import { Country } from '@app/modules/countries/interfaces/country.interface';
import { CountriesService } from '@app/core/services/countries/countries.service';
import { Region } from '@app/modules/countries/interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];

  typeSearch = 'region';
  public selectedRegion?: Region;

  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  constructor(private countriesService: CountriesService) {

  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.term;
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
