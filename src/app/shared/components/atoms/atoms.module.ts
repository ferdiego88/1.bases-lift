import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { InputFormControlComponent } from './input-form-control/input-form-control.component';
import { H1Component } from './h1/h1.component';
import { LabelComponent } from './label/label.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ListGroupItemComponent } from './list-group-item/list-group-item.component';
import { H3Component } from './h3/h3.component';
import { H5Component } from './h5/h5.component';
import { InputTextComponent } from './input-text/input-text.component';

const atomsComponents = [
  ButtonComponent,
  InputFormControlComponent,
  H1Component,
  LabelComponent,
  ParagraphComponent,
  ListGroupItemComponent,
  H3Component,
  H5Component,
  InputTextComponent,
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
