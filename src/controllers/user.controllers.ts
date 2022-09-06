import UserModel from '../models/usermodel';
import express from 'express'
import { setOriginalNode } from 'typescript';
 
export default class UserController{
  public userModel : UserModel;
  constructor(){
    this.userModel = new UserModel();
    this.listUser = this.listUser.bind(this);
    this.getUserId = this.getUserId.bind(this);
    this.insertUser = this.insertUser.bind(this);
  }
  async listUser(req: express.Request, res : express.Response){
    try { 
      await this.userModel.listUser().then((response) =>{
        res.status(200);
        res.send(response);
      })
    } catch (error) {
      res.status(400);
      res.send(error);
    }
  }
  async getUserId(req: express.Request, res : express.Response){
    try {
      await this.userModel.getuserid(Number(req.params.id)).then((response: any) =>{
        if(response.length > 0){
          res.status(200);
          res.send(response);
        }
        else{
          res.status(400);
          res.send('No se ha encontrado el usuario')
        }
      }); 
    } catch (error) {
        res.status(400);
        res.send(error);
    }
  }
  async insertUser(req: express.Request, res : express.Response){
    try {
      await this.userModel.getUserName(req.body.username).then(async (response : any) =>{
        if(response.length > 0){
          res.send('El usuario ya existe')
        }
        else{
          await this.userModel.insertUser(req.body.username, req.body.password).then((response) =>{
            res.send('usuario agregado');
          }).catch((error) => res.send(error));
        }
      }
      ).catch((error) => res.send(error));
    } catch (error) {
      res.send(error)
    }

  }
}
