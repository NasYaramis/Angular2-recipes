import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Product } from './product';
import { ProductService } from './product.service';

@Component ({
   selector: 'product-search',
   templateUrl: './product-search.component.html'
})

export class ProductSearchComponent {
    search: FormGroup;
    result_question: string;
    result_answer: string;
    name: string;
    calories: number;
    ingredients: string;
    time: number;

    ngOnInit() {
       this.search = new FormGroup({
         name: new FormControl(''),
         calories: new FormControl(''),
         ingredients: new FormControl(''),
         time: new FormControl('')
       });
   }

   constructor(private productService: ProductService) {}

   onSubmit() {
       this.result_answer = this.productService.searchProduct(this.search.value.name, this.search.value.calories, this.search.value.ingredients, this.search.value.time);
   }
}
