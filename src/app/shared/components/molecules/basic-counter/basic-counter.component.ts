import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-counter',
  templateUrl: './basic-counter.component.html',
  styleUrls: ['./basic-counter.component.scss']
})
export class BasicCounterComponent {

  @Input() textContent = 'Hola Mundo';
  @Input() labelContent = 'Contador : ';
  @Input() paragraphContent = '1';
}
