import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FashionComponent } from './fashion/fashion.component';

const routes: Routes = [

    {path:'/',component:AppComponent},
    {path:'/products',component:ProductComponent},
    {path:'/fashion',component:FashionComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
