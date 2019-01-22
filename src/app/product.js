"use strict";
var Product = (function () {
    function Product(question, answer) {
        this.question = question;
        this.answer = answer;
    }
    Product.prototype.toForm = function () {
        return "question=" + this.question + "&answer=" + this.answer;
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map