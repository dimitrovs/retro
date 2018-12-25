import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';

import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { InlineEditComponent } from './item-list/inline-edit/inline-edit.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, DragDropModule, MatInputModule ],
  declarations: [ AppComponent, ItemListComponent, InlineEditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
