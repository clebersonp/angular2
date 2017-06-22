import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingEventComponent } from './data-binding-event/data-binding-event.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataBindingEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
