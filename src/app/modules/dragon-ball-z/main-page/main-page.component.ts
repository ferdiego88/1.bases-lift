import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { charactersMock } from '@app/core/mocks/character.mock';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  title = 'Personajes de Dragon Ball Z';

  @Input() characters: Character[] = charactersMock;

   addCharacter(character:Character) {
    this.characters.push(character);
   }

   deleteCharacter(idx: number) {
     this.characters.splice(idx,1);
   }
}
