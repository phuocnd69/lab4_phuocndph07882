import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { BikeComponent } from './bike/bike.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeManagerComponent } from './bike-manager/bike-manager.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, BikeComponent, BikeListComponent, BikeManagerComponent, SlideComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
