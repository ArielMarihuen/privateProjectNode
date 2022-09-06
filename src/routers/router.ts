import { Router } from "express";
import UserController from "../controllers/user.controllers";

// T controlador, U middlerware
export class allrouters{
    public router : Router;
    private userController : UserController;
    constructor(){
        this.userController = new UserController();
        this.router = Router();
        this.router.get('/user', this.userController.listUser);
        this.router.get('/user/:id', this.userController.getUserId);
        this.router.post('/user', this.userController.insertUser);
    }

}