import { Component } from '@angular/core';
import { GifsService } from '@app/core/services/gifs/gifs.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.scss']
})
export class GifsListComponent {

  constructor(private gifsService: GifsService) {

  }

  get gifs() {
    return this.gifsService.gifs;
  }
}
