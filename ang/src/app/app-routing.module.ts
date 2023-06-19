import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { RetailComponent } from './retail/retail.component';

const routes: Routes = [

       {path:'', component:HomeComponent},
       {path:'products',component:ProductComponent},
       {path:'fashion',component:FashionComponent},
       {path:'fashion/:id/:id2',component:FashionComponent},
       {path:'retail',component:RetailComponent},
       {path: '**', component: RouteNotFoundComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
