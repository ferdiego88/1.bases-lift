import { Injectable } from '@angular/core';
import { Gifs } from '../../../shared/interfaces/gifs';
import { HttpGifsService } from '@app/shared/services/gifs-service/http-gifs.service';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private _gifs: Gifs[] = [];


  constructor(private httpGifsService: HttpGifsService) {
    this.loadGifsLocalStorage();
    this.searchTag(this._tagsHistory[0]);
  }

  private saveGifsLocalStorage():void {
      localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadGifsLocalStorage(): void {
    if(!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')?? '' );
  }

  private organizeHistory(tag: string) {
     tag = tag.toLowerCase();

     if (this._tagsHistory.includes(tag)) {
        this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag);
     }

    this._tagsHistory.unshift(tag);
     this._tagsHistory = this._tagsHistory.splice(0,10);
     this.saveGifsLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  get gifs() {
    return [...this._gifs];
  }

  searchTag(tag: string):void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    this.httpGifsService.getGifs(tag)
    .subscribe((gifs) => {
      this._gifs = gifs;
    })
  }

}
