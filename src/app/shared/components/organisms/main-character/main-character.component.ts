import { Component, Input } from '@angular/core';
import { Character } from '@app/modules/dragon-ball-z/interfaces/character.interface';

@Component({
  selector: 'app-main-character',
  templateUrl: './main-character.component.html',
  styleUrls: ['./main-character.component.scss']
})
export class MainCharacterComponent {

  @Input() title = '';
  @Input() characters: Character[] = [];
}
