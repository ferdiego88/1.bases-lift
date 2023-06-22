import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() tags:string[] = [];

  @Output() tag = new EventEmitter<string>();

  OnSelectedTag(tag:string ) {
    this.tag.emit(tag);
  }
}
