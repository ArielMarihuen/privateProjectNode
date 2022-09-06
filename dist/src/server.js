"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = require("./routers/user.router");
const product_router_1 = require("./routers/product.router");
const config_1 = require("./config/config");
class serverapp extends config_1.ConfigServer {
    constructor() {
        super();
        this.app = (0, express_1.default)();
        this.port = this.getNumberEnv('PORT');
        /*express.json()es un método incorporado en Express
        para reconocer el objeto de solicitud entrante como un objeto JSON.
        Este método se llama como un middleware en su aplicación
        usando el código:app.use(express.json());


        express.urlencoded()es un método incorporado en Express para reconocer
        el objeto de solicitud entrante como cadenas o matrices.
        Este método se llama como un middleware en su aplicación usando el
        código:app.use(express.urlencoded());*/
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use("/api", this.routers());
        this.listen();
    }
    //una funcion de tipo array de rutas de express
    routers() {
        return [new user_router_1.UserRouter().router, new product_router_1.ProductRouter().router];
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server Up on port ' + this.port);
        });
    }
}
new serverapp();
