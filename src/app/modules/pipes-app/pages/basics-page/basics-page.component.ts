import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  nameLower = 'fernando';
  nameUpper = 'FERNANDO';
  fullName = 'gIAnLucA sAnTiLlAN VAraS';

  customDate = new Date();


}
