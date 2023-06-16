import { Injectable } from '@angular/core';
import { charactersMock } from '@app/core/mocks/character.mock';
import { Character } from '@app/modules/dragon-ball-z/interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: Character[] = charactersMock;


  addCharacter(character: Character): void {
    this.characters.push(character);
  }

  deleteCharacter(idx: number): void {
    this.characters.splice(idx, 1);
  }

}
