import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HolidayPackagesComponent } from './holiday-packages/holiday-packages.component';
import { HomeStaysComponent } from './home-stays/home-stays.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    HotelsComponent,
    HolidayPackagesComponent,
    HomeStaysComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HomeComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
