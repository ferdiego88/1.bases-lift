import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-debounce-text',
  templateUrl: './input-debounce-text.component.html',
  styleUrls: ['./input-debounce-text.component.scss']
})
export class InputDebounceTextComponent {
  isInputEmpty = true;
  @Input() placeholder = '';
  @Input() inputType = '';
  @Input() inputName = '';
  @Input() inputValue = '';
  @Input() className = '';
  @Input() isDisabled = false;
  @Input() readOnly = '';

  @Output() keyPress = new EventEmitter<string>();

  @ViewChild('txtDebounceInput')
  tagInput!: ElementRef<HTMLInputElement>;



  public onKeyPress () {
    this.keyPress.emit(this.tagInput.nativeElement.value);
    //console.log(this.tagInput.nativeElement.value);
    //this.tagInput.nativeElement.value = '';
  }

}
