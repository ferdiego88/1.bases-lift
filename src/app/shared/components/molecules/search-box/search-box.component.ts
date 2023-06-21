import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @Output() OnTextInput = new EventEmitter<string>();

  searchTag (tag: string):void {
    this.OnTextInput.emit(tag);
  }
}

