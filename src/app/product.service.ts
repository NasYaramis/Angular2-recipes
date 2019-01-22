import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Product } from './product';

@Injectable()
export class ProductService {

   private productsServiceURI: string = 'http://localhost:4000';

   constructor() {}


   searchProduct(name: string, calories: string, ingredients: string, time: string): string {
       localStorage.setItem(name, ingredients);
      return "Submit succesfull";
   }
}
