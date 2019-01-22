import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductSearchComponent } from './product-search.component';
import { ProductService } from './product.service';

// define the routes
const appRoutes: Routes = [
  { path: '**', component: ProductSearchComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,
                FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ProductSearchComponent],
  providers:    [ ProductService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
