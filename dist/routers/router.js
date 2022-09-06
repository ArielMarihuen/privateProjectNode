"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allrouters = void 0;
const express_1 = require("express");
const user_controllers_1 = __importDefault(require("../controllers/user.controllers"));
// T controlador, U middlerware
class allrouters {
    constructor() {
        this.userController = new user_controllers_1.default();
        this.router = (0, express_1.Router)();
        this.router.get('/user', this.userController.listUser);
        this.router.get('/user/:id', this.userController.getUserId);
        this.router.post('/user', this.userController.insertUser);
    }
}
exports.allrouters = allrouters;
