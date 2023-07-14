import { Component, Input } from '@angular/core';
import { Paths } from '@app/modules/countries/interfaces/paths.interface';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent {

  @Input() title ='';
  @Input() paths: Paths[] = [];


}
