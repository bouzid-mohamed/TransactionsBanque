import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { PricesComponent } from './prices/prices.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  { path: 'aboutus', component: AboutUsComponent } ,
  { path: 'selftransactions', component: PricesComponent } ,
  { path: '', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
