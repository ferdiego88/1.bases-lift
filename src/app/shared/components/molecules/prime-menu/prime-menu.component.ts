import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-prime-menu',
  templateUrl: './prime-menu.component.html',
  styleUrls: ['./prime-menu.component.scss']
})
export class PrimeMenuComponent  {
  @Input() menuItems: MenuItem[] = [];

}
