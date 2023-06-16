import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-character',
  templateUrl: './main-character.component.html',
  styleUrls: ['./main-character.component.scss']
})
export class MainCharacterComponent {

  @Input() title = '';
}
