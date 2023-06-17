import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@app/modules/dragon-ball-z/interfaces/character.interface';

@Component({
  selector: 'app-list-group-item',
  templateUrl: './list-group-item.component.html',
  styleUrls: ['./list-group-item.component.scss']
})
export class ListGroupItemComponent {

  @Input() listTitle = '';
  @Input() characters: Character[] = [];
  @Output() idx: EventEmitter<string> = new EventEmitter();


onDeleteCharacter(uuid: string): void {
  this.idx.emit(uuid);
}

}
