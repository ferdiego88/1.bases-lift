import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifsResponse } from '@app/shared/interfaces/gifs.response';
import { Gifs } from '@app/shared/interfaces/gifs';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpGifsService {
  private apiKey = environment.GIFS_API_TOKEN;

  constructor(private httpClient: HttpClient) {

  }

  private params(tag: string) {
    return new HttpParams()
    .set('api_key',this.apiKey)
    .set('q',tag)
    .set('limit','10');
  }

  getGifs(tag: string):Observable<Gifs[]> {
    return this.httpClient.get<GifsResponse>(`${environment.BASE_URL}/v1/gifs/search`,{params:this.params(tag)})
    .pipe(
      map((resp)=> resp.data)
    );
  }
}
