import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Character } from '@app/modules/dragon-ball-z/interfaces/character.interface';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.scss']
})
export class FormCharacterComponent implements OnInit {

  @Input() className = '';
  @Input() titleForm = '';
  @Output() newCharacter: EventEmitter<Character> = new EventEmitter();


  character!: Character;
  formCharacter!: FormGroup;

  public getControl(controlName: string ):FormControl {
    return this.formCharacter.get(controlName) as FormControl;
  }

  constructor(private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initalizeFormCharacter();
  }


  initalizeFormCharacter(): void {
    this.formCharacter = this.fb.group({
      name:[''],
      power:[0],
    })
  }

  emitCharacter(): void {
    this.character = this.formCharacter.value;

    if (this.character.name.length === 0) {
        return;
    }

    this.newCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    }
  }

}
