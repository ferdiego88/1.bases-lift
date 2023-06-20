import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form-control',
  templateUrl: './input-form-control.component.html',
  styleUrls: ['./input-form-control.component.scss']
})
export class InputFormControlComponent {
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
