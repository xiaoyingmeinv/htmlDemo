import {NgModule}           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

/* App Root */
import { AppComponent }    from './app.component';


/* Contact Imports */
import { ContactModule }  from './contact/contact.module';

import {AppRoutingModule} from "./routing/routing.module";
import {CoreModule} from "./core/core.module";



@NgModule({
  imports:      [
    BrowserModule,
    ContactModule,
    AppRoutingModule,

   CoreModule.forRoot({userName: 'Miss Marple'})],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
