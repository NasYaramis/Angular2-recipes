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

    ngOnInit() {
       this.search = new FormGroup({
         name: new FormControl('')
       });
   }

   constructor(private productService: ProductService) {}

   onSubmit() {
       this.result_answer = this.productService.searchProduct(this.search.value.name);
   }
}
