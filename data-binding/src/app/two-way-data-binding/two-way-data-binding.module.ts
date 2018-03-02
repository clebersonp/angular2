import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoWayDataBindingComponent } from './two-way-data-binding.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TwoWayDataBindingComponent
  ],
  exports: [
    TwoWayDataBindingComponent
  ]
})
export class TwoWayDataBindingModule { }
