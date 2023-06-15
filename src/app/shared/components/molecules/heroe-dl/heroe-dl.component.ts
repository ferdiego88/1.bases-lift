import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-dl',
  templateUrl: './heroe-dl.component.html',
  styleUrls: ['./heroe-dl.component.scss']
})
export class HeroeDlComponent {

  @Input() textContent = 'Ironman';

  name = 'Ironman';
  age = 45;

}
