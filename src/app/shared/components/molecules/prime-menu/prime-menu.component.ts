import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-prime-menu',
  templateUrl: './prime-menu.component.html',
  styleUrls: ['./prime-menu.component.scss']
})
export class PrimeMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
          },
          {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
          }
      ];
  }
}
