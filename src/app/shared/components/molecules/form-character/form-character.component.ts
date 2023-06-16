import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.scss']
})
export class FormCharacterComponent {

  @Input() className = '';
  @Input() titleForm = '';
}
