import { Component, OnInit } from '@angular/core';
import { Paths } from '../../interfaces/paths.interface';

@Component({
  selector: 'app-countries-main',
  templateUrl: './countries-main.component.html',
  styleUrls: ['./countries-main.component.scss']
})
export class CountriesMainComponent implements OnInit {

  basePath = '/countries/main';

  paths: Paths[] = [
    {name: 'Home',route: `${this.basePath}/home`},
    {name: 'About',route: `${this.basePath}/about`},
    {name: 'Contact',route: `${this.basePath}/contact`},
  ];


  ngOnInit(): void {
    console.log(this.paths);
  }


}
