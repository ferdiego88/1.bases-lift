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
 characters: Character[];

  constructor(private characterService: CharactersService) {
    this.characters = this.characterService.characters;
  }



   addCharacter(character:Character) {
    this.characterService.addCharacter(character);
   }

   deleteCharacter(idx: number) {
     this.characterService.deleteCharacter(idx);
   }
}
