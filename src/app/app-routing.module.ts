import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeComponent } from './bike/bike.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { BikeManagerComponent } from './bike-manager/bike-manager.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routers: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomepageComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'about', component:AboutComponent},
  {path: 'bike', component: BikeComponent},
  {path: 'bike-list', component: BikeListComponent},
  {path: 'bike/:bikeID', component:BikeDetailComponent},
  {path: 'bike-manager', component:BikeManagerComponent},
  {path: '404', component:NotFoundComponent},
  {path: '***', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule{}