import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directive/highlight.directive';
import { TitleComponent } from './title/title.component';
import {UserService} from "./service/user.service";
import { ContactComponent } from './contact/contact/contact.component';
import {
  HighlightDirective as ContactHighlightDirective
} from './contact/highlight.directive';
import { AwesomePipe } from './contact/awesome.pipe';
import {ContactService} from "./contact/contact.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";




@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent,
    HighlightDirective,
    TitleComponent,
    AwesomePipe,
    ContactComponent,ContactHighlightDirective],
  providers:    [ ContactService, UserService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
