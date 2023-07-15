import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {

  @Input() src = '';
  @Input() alt = '';
  @Input() className = '';
  @Input() classFigure = '';
  @Input() style = {};
  @Output() hasLoaded = new EventEmitter<void>();

  public loaded() {
    this.hasLoaded.emit();
  }
}
