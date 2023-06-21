import { Component } from '@angular/core';
import { GifsService } from '@app/core/services/gifs/gifs.service';

@Component({
  selector: 'app-gifs-search-box',
  templateUrl: './gifs-search-box.component.html',
  styleUrls: ['./gifs-search-box.component.scss']
})
export class GifsSearchBoxComponent {

  constructor(private gifsService: GifsService) {

  }

  searchGifs(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
