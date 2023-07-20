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

  }

  searchCountry(term: any, type: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.baseUrl}/${type}/${term}`)
      .pipe(
      tap(countries => {
        if (type === 'capital') {
          this.cacheStore.byCapital = {term, countries}
        } else if(type === 'name') {
          this.cacheStore.byCountries = {term, countries}
        } else if(type === 'region') {
          this.cacheStore.byRegion = {term,countries}
        }
      }),
       catchError( () => of([])),
       delay(2000)
      );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.baseUrl}/alpha/${code}`)
    .pipe(
    map(countries => countries.length > 0 ? countries[0]: null ),
     catchError( () => of(null) )
    );
  }

}
