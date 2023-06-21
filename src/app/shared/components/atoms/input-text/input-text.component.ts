import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  isInputEmpty = true;
  @Input() placeholder = '';
  @Input() inputType = '';
  @Input() inputName = '';
  @Input() inputValue = '';
  @Input() className = '';
  @Input() isDisabled = false;
  @Input() readOnly = '';

  @Output() keyUpEnter = new EventEmitter<string>();

  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;



  public onKeyUpEnter () {
    this.keyUpEnter.emit(this.tagInput.nativeElement.value);
    this.tagInput.nativeElement.value = '';
  }

}
