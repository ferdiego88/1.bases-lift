import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { CharactersService } from '@app/core/services/characters/characters.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

title = 'Personajes de Dragon Ball Z';

  constructor(private characterService: CharactersService) {
  }

  get characters(): Character[] {
    return [...this.characterService.characters];
  }

   onNewCharacter(character:Character) {
    this.characterService.addCharacter(character);
   }

   onDeleteCharacter(uuid: string) {
     this.characterService.deleteCharacter(uuid);
   }
}
