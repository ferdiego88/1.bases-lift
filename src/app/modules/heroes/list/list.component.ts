import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  heroes = ['Spiderman','IronMan','Hulk','She Hulk', 'Thor']
}
