import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { RetailComponent } from './retail/retail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RouteNotFoundComponent,
    HomeComponent,
    FashionComponent,
    RetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
