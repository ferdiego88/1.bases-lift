import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Character } from '@app/modules/dragon-ball-z/interfaces/character.interface';

@Component({
  selector: 'app-main-character',
  templateUrl: './main-character.component.html',
  styleUrls: ['./main-character.component.scss']
})
export class MainCharacterComponent {

  @Input() title = '';
  @Input() characters: Character[] = [];
  @Output() newCharacter: EventEmitter<Character> = new EventEmitter();
  @Output() OnIdx: EventEmitter<number> = new EventEmitter();


  onNewCharacter(character: Character):void {
    this.newCharacter.emit(character);
  }

  emitIdx(idx: number) {
    this.OnIdx.emit(idx);
  }

}
