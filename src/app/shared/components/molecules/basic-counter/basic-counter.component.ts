import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-counter',
  templateUrl: './basic-counter.component.html',
  styleUrls: ['./basic-counter.component.scss']
})
export class BasicCounterComponent {

  @Input() textContent = 'Basic Counter';
  @Input() labelContent = 'Contador : ';
  @Input() paragraphContent = '0';
  counter = 0;

  increaseAmount() {
    this.counter++;
    this.paragraphContent = this.counter.toString();
  }

  decreaseAmount() {
    this.counter--;
    this.paragraphContent = this.counter.toString();
  }

  resetAmount() {
    this.counter = 0;
    this.paragraphContent = this.counter.toString();
  }

}
