import { Component, OnInit } from '@angular/core';
import { Paths } from '../../interfaces/paths.interface';

@Component({
  selector: 'app-countries-main',
  templateUrl: './countries-main.component.html',
  styleUrls: ['./countries-main.component.scss']
})
export class CountriesMainComponent  {

  basePath = '/countries/main';

  paths: Paths[] = [
    {name: 'Por Capital',route: `${this.basePath}/by-capital`},
    {name: 'Por País',route: `${this.basePath}/by-country`},
    {name: 'Por Región',route: `${this.basePath}/by-region`},
  ];

}
