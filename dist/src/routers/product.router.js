"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const routers_1 = require("./routers");
const product_controllers_1 = require("../controllers/product.controllers");
class ProductRouter extends routers_1.baserouter {
    constructor() {
        super(product_controllers_1.ProductController);
    }
    routes() {
        this.router.get("/product", this.controller.getproduct);
    }
}
exports.ProductRouter = ProductRouter;
