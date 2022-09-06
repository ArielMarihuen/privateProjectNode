"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const routers_1 = require("./routers");
const user_controllers_1 = require("../controllers/user.controllers");
class UserRouter extends routers_1.baserouter {
    constructor() {
        super(user_controllers_1.UserController);
    }
    routes() {
        this.router.get("/user", this.controller.getuser);
    }
}
exports.UserRouter = UserRouter;
