import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@app/modules/countries/interfaces/country.interface';
import { environment } from 'environments/environment';
import { Observable, catchError, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
private baseUrl = environment.BASE_COUNTRY_URL;
  constructor(private httpClient: HttpClient) {


  }

  searchCountry(term: string, type: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.baseUrl}/${type}/${term}`)
      .pipe(
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
