import { Component, OnInit } from '@angular/core';
import { CountriesService } from '@app/core/services/countries/countries.service';
import { Country } from '@app/modules/countries/interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading = false;
  public initialValue = '';

  typeSearch = 'capital';

  constructor(private countriesService: CountriesService) {

  }

  ngOnInit(): void {
   this.countries = this.countriesService.cacheStore.byCapital.countries;
   this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(termino: string) {
    this.isLoading = true;
    this.countriesService.searchCountry(termino, this.typeSearch)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
        console.log(countries);
      })
  }
}
