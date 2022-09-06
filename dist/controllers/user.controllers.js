"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usermodel_1 = __importDefault(require("../models/usermodel"));
class UserController {
    constructor() {
        this.userModel = new usermodel_1.default();
        this.listUser = this.listUser.bind(this);
        this.getUserId = this.getUserId.bind(this);
        this.insertUser = this.insertUser.bind(this);
    }
    listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.userModel.listUser().then((response) => {
                    res.status(200);
                    res.send(response);
                });
            }
            catch (error) {
                res.status(400);
                res.send(error);
            }
        });
    }
    getUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.userModel.getuserid(Number(req.params.id)).then((response) => {
                    if (response.length > 0) {
                        res.status(200);
                        res.send(response);
                    }
                    else {
                        res.status(400);
                        res.send('No se ha encontrado el usuario');
                    }
                });
            }
            catch (error) {
                res.status(400);
                res.send(error);
            }
        });
    }
    insertUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.userModel.getUserName(req.body.username).then((response) => __awaiter(this, void 0, void 0, function* () {
                    if (response.length > 0) {
                        res.send('El usuario ya existe');
                    }
                    else {
                        yield this.userModel.insertUser(req.body.username, req.body.password).then((response) => {
                            res.send('usuario agregado');
                        }).catch((error) => res.send(error));
                    }
                })).catch((error) => res.send(error));
            }
            catch (error) {
                res.send(error);
            }
        });
    }
}
exports.default = UserController;
