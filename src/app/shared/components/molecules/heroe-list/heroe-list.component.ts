import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.scss']
})
export class HeroeListComponent {

  @Input() heroNames: string[] = ['Spiderman'];
}
