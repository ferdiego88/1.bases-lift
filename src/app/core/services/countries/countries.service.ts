import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@app/modules/countries/interfaces/country.interface';
import { environment } from 'environments/environment';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
private baseUrl = environment.BASE_COUNTRY_URL;
  constructor(private httpClient: HttpClient) {


  }

  searchCapital(term: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.baseUrl}/capital/${term}`)
      .pipe(
       catchError( error => {
        console.log(error);
        return  of([])
       } )
      );
  }

}
