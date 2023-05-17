import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() title = '';
  @Input() typeButton = 'button';
  @Input() disabled = false;
  @Input() className = '';
  @Input() theme = '';
  @Input() icon = '';
  @Input() alt = '';
  @Input() id? = '';
  @Output() clicked = new EventEmitter<void>();


  public onClickHandler () {
    this.clicked.emit();
  }
}
