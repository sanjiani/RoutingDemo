import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { FlightComponent } from './flight/flight.component';
// import { HotelsComponent } from './hotels/hotels.component';
// import { HolidayPackagesComponent } from './holiday-packages/holiday-packages.component';
// import { HomeStaysComponent } from './home-stays/home-stays.component';
//  import { FlightComponent } from './flight/flight.component';
//  import { HotelsComponent } from './hotels/hotels.component';
//  import { HolidayPackagesComponent } from './holiday-packages/holiday-packages.component';
//  import { HomeStaysComponent } from './home-stays/home-stays.component';
//  import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {path:"flight",component:FlightComponent},
  // {path:"hotels",component:HotelsComponent},
  // {path:"holiday-packages",component:HolidayPackagesComponent},
  // {path:"home-stays",component:HomeStaysComponent},
  // {path:"", redirectTo:"flight",pathMatch:"full"},//Default Route
  // {path:"**",component:PageNotFoundComponent}, // Wildcard Route

  {path:"home",component:HomeComponent},
  {path:"product-list",component:ProductListComponent},
  {path:"product-details/:id",component:ProductDetailsComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:PageNotFoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
