import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheStore } from '@app/modules/countries/interfaces/cache-store.interface';
import { Country } from '@app/modules/countries/interfaces/country.interface';
import { Region } from '@app/modules/countries/interfaces/region.type';
import { environment } from 'environments/environment';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

private baseUrl = environment.BASE_COUNTRY_URL;

public cacheStore: CacheStore = {
  byCapital:   {term: '', countries: []},
  byCountries: {term: '', countries: []},
  byRegion:    {term: '', countries: []},
}

  constructor(private httpClient: HttpClient) {
  this.loadToLocalStorage();
  }

 private loadToLocalStorage() {
  if (!localStorage.getItem('cacheStore')) return;

  this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);

 }

 private saveToLocalStorage() {
  localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
 }


  searchCountry(term: any, type: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.baseUrl}/${type}/${term}`)
      .pipe(
      tap(countries => {
        this.setCacheStore(type, term, countries);
      }),
      tap( () => this.saveToLocalStorage()),
       catchError( () => of([])),
       //delay(1000)
      );
  }


  setCacheStore(type: string, term: any, countries: Country[] ) {
    if (type === 'capital') {
      this.cacheStore.byCapital = {term, countries}
    } else if (type === 'name') {
      this.cacheStore.byCountries = {term, countries}
    } else if (type === 'region') {
      this.cacheStore.byRegion = {term,countries}
    }
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.baseUrl}/alpha/${code}`)
    .pipe(
    map(countries => countries.length > 0 ? countries[0]: null ),
     catchError( () => of(null) )
    );
  }

}
