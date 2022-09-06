"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baserouter = void 0;
const express_1 = require("express");
// T controlador, U middlerware
class baserouter {
    //public middlerware : U
    //le decimmos al controlador que tiene que recibir
    //decimos que el constructor va a recibir un parametro que llamaremos
    //Tcontroller y este va a tener de tipo la clase que asignaremos en t
    //lo seateamos con lo que reciba y despues abajo le decimos a controlador
    // que es igual a Tcontroller
    constructor(Tcontroller) {
        this.router = (0, express_1.Router)();
        this.controller = new Tcontroller();
        this.routes();
    }
    routes() { }
}
exports.baserouter = baserouter;
