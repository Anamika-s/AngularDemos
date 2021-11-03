import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NewOcompComponent } from './new-ocomp/new-ocomp.component';
import { NewComponent } from './new-comp';
import { OoComponent } from './oo.component';
import { Oo1Component } from './oo1/oo1.component';
import {DataBindingDemo} from   './data-binding';
import { PracticeComponent } from './practice/practice.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NewOcompComponent,
    NewComponent,
    OoComponent,
    Oo1Component,
    DataBindingDemo,
    PracticeComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
