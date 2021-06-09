import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ListNavigatorComponent } from './list-navigator/list-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNavigatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
