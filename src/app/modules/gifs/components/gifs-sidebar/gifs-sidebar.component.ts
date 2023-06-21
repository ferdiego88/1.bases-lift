import { Component } from '@angular/core';
import { GifsService } from '@app/core/services/gifs/gifs.service';

@Component({
  selector: 'app-gifs-sidebar',
  templateUrl: './gifs-sidebar.component.html',
  styleUrls: ['./gifs-sidebar.component.scss']
})
export class GifsSidebarComponent {



  constructor(private gifsService: GifsService) {

  }

  get getTags():string[] {
    return this.gifsService.tagsHistory;
  }
}
