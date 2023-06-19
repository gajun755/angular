import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { FashionComponent } from './fashion/fashion.component';


@NgModule({
  declarations: [
    ProductComponent,
    FashionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
