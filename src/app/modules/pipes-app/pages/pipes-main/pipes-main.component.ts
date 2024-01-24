import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pipes-main',
  templateUrl: './pipes-main.component.html',
  styleUrls: ['./pipes-main.component.scss']
})
export class PipesMainComponent {

  menuItems: MenuItem[] | undefined =
  [
              {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                {
                  label: 'Textos y Fechas',
                  icon: 'pi pi-align-left',
                  routerLink: '/pipes/main'
                },
                {
                  label: 'Números',
                  icon: 'pi pi-dollar',
                  routerLink: 'numbers'
                },
                {
                  label: 'No comunes',
                  icon: 'pi pi-globe',
                  routerLink: 'uncommon'
                },
              ]
          },
          {
              label: 'Pipes personalizados',
              icon: 'pi pi-cog',
              items: [
                {
                  label: 'Custom Pipes',
                  icon: 'pi pi-cog',
                  routerLink: 'custom'
                },
              ]
          }
  ]
}
