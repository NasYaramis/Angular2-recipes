"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ProductService = (function () {
    function ProductService() {
        this.productsServiceURI = 'http://localhost:4000';
    }
    // get a product based on the name
    ProductService.prototype.searchProduct = function (name) {
        var answer = '';
        if (localStorage.getItem(name) != null) {
            answer = localStorage.getItem(name);
        }
        else {
            localStorage.setItem(name, answer);
        }
        return "Submit succesfull";
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map