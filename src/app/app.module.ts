import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { BikeComponent } from './bike/bike.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeManagerComponent } from './bike-manager/bike-manager.component';
import { SlideComponent } from './slide/slide.component';
// import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceComponent } from './service/service.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, BikeComponent, BikeListComponent, BikeManagerComponent, SlideComponent, BikeDetailComponent, HomepageComponent, NotFoundComponent, ServiceComponent, AddBikeComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [],
})
export class AppModule { }
