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
const db_1 = __importDefault(require("../db/db"));
class UserModel {
    listUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, db_1.default)('portafolio')
                    .select('*')
                    .from('usuarios')
                    .then((users) => {
                    resolve(users);
                }).catch((reason) => {
                    reject("ERROR => " + reason);
                });
            });
        });
    }
    getuserid(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, db_1.default)('portafolio')
                    .select('*')
                    .from('usuarios')
                    .where('id', id)
                    .then((users) => {
                    resolve(users);
                }).catch((reason) => {
                    reject('Error => ' + reason);
                });
            });
        });
    }
    insertUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                (0, db_1.default)('portafolio')
                    .insert({
                    'id': yield this.countId(),
                    'username': username,
                    'password': password
                }).into('usuarios')
                    .then((response) => {
                    resolve(response);
                }).catch((response) => {
                    reject(response);
                });
            }));
        });
    }
    countId() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, db_1.default)('portafolio')
                    .select('*')
                    .from('usuarios')
                    .then((users) => {
                    resolve(users.length);
                }).catch((reason) => {
                    reject('Error => ' + reason);
                });
            });
        });
    }
    getUserName(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, db_1.default)('portafolio')
                    .select('*')
                    .from('usuarios')
                    .where('username', username)
                    .limit(1)
                    .then((users) => {
                    resolve(users);
                }).catch((reason) => {
                    reject('Error => ' + reason);
                });
            });
        });
    }
}
exports.default = UserModel;
