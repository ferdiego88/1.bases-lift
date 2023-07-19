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
import { ImageCardComponent } from './image-card/image-card.component';
import { LoaderRingComponent } from './loader-ring/loader-ring.component';
import { H2Component } from './h2/h2.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { InputDebounceTextComponent } from './input-debounce-text/input-debounce-text.component';

const atomsComponents = [
  ButtonComponent,
  H1Component,
  H2Component,
  H3Component,
  H5Component,
  ImageCardComponent,
  InputTextComponent,
  InputDebounceTextComponent,
  InputFormControlComponent,
  ParagraphComponent,
  LabelComponent,
  ListGroupItemComponent,
  LoaderRingComponent,
  LoadingSpinnerComponent,
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
