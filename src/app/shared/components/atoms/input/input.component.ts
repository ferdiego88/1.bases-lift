import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  isInputEmpty = true;
  @Input() placeholder = '';
  @Input() inputType = '';
  @Input() inputName = '';
  @Input() inputValue = '';
  @Input() className = '';
  @Input() isDisabled = false;
  @Input() readOnly = '';
  @Input() control!: FormControl;




}
