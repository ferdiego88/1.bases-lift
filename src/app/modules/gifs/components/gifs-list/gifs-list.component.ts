import { Component } from '@angular/core';
import { GifsService } from '@app/core/services/gifs/gifs.service';
import { Gifs } from '@app/shared/interfaces/gifs';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.scss']
})
export class GifsListComponent {

  constructor(private gifsService: GifsService) {

  }

  get gifs(): Gifs[] {
    return this.gifsService.gifs;
  }
}
