import { Component } from '@angular/core';

@Component({
  selector: 'app-main-heroes',
  templateUrl: './main-heroes.component.html',
  styleUrls: ['./main-heroes.component.scss']
})
export class MainHeroesComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

}
