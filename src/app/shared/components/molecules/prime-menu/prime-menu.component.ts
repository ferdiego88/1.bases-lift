import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-prime-menu',
  templateUrl: './prime-menu.component.html',
  styleUrls: ['./prime-menu.component.scss']
})
export class PrimeMenuComponent implements OnInit {
  menuItems: MenuItem[] | undefined;

  ngOnInit() {
      this.menuItems = [
          {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                {
                  label: 'Textos y Fechas',
                  icon: 'pi pi-align-left'
                },
                {
                  label: 'Números',
                  icon: 'pi pi-dollar'
                },
                {
                  label: 'No comunes',
                  icon: 'pi pi-globe'
                },
              ]
          },
          {
              label: 'Pipes personalizados',
              icon: 'pi pi-cog',
          }
      ];
  }
}
