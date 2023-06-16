import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.scss']
})
export class FormCharacterComponent implements OnInit {

  @Input() className = '';
  @Input() titleForm = '';

  formCharacter: FormGroup;

  public getControl(controlName: string ):FormControl {
    return this.formCharacter.get(controlName) as FormControl;
  }

  constructor(private readonly fb: FormBuilder) {

    this.formCharacter = new FormGroup({});
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

}
