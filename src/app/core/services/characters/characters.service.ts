import { Injectable } from '@angular/core';
import { charactersMock } from '@app/core/mocks/character.mock';
import { Character } from '@app/modules/dragon-ball-z/interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public characters: Character[] = charactersMock;


  addCharacter(character: Character): void {
    const newCharacter:Character = { id: uuid(),...character };
    this.characters.push(newCharacter);
  }

  deleteCharacter(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
    console.log(this.characters);
  }

}
