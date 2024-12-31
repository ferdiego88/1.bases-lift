import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-prime-menu-bar',
  templateUrl: './prime-menu-bar.component.html',
  styleUrls: ['./prime-menu-bar.component.scss']
})
export class PrimeMenuBarComponent {
  @Input() menuItems: MenuItem[] | undefined;
}
