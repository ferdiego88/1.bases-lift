import { Component, Input } from '@angular/core';
import { Gifs } from '@app/shared/interfaces/gifs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

@Input() gifs: Gifs[] = [];
}
