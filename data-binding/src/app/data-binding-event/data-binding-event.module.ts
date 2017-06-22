import { DataBindingComponent } from './../data-binding/data-binding.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingEventComponent } from './data-binding-event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DataBindingEventComponent
  ],
  exports: [
    DataBindingComponent
  ]  
})
export class DataBindingEventModule { }
