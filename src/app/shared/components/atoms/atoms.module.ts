import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { H1Component } from './h1/h1.component';
import { LabelComponent } from './label/label.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ListGroupItemComponent } from './list-group-item/list-group-item.component';

const atomsComponents = [
  ButtonComponent,
  InputComponent,
  H1Component,
  LabelComponent,
  ParagraphComponent,
  ListGroupItemComponent,
]

@NgModule({
  declarations: [
    ...atomsComponents,
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ], exports: [
    ...atomsComponents
  ]
})
export class AtomsModule { }
