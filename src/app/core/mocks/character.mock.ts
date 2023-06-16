import { CharacterResponse } from "@app/shared/interfaces/character.response";
import { v4 as uuid } from 'uuid';

export const charactersMock: CharacterResponse[] = [
  {
  id: uuid(),
  name: 'Goku',
  power: 100000
  },
  {
  id: uuid(),
  name: 'Vegeta',
  power: 9000
  },
  {
  id: uuid(),
  name: 'Krillin',
  power: 4500
  },
  {
  id: uuid(),
  name: 'Freezer',
  power: 10500
  },
]
