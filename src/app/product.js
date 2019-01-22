"use strict";
var Product = (function () {
    function Product(name, calories, ingredients, time) {
        this.name = name;
        this.calories = calories;
        this.ingredients = ingredients;
        this.time = time;
    }
    Product.prototype.toForm = function () {
        return "name=" + this.name + "&calories=" + this.calories + "&ingredients=" + this.ingredients + "&time=" + this.time;
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map