import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ZinoInputModule} from '../lib/public_api';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZinoInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
