import db from '../db/db';
import { Response } from 'express';


export default class UserModel{
  async listUser(){
    return new Promise((resolve, reject) => {
      db('portafolio')
      .select('*')
      .from('usuarios')
      .then((users: any) => {
        resolve(users);
      }).catch((reason: any) => {
      reject("ERROR => " + reason);
      })
    });
  }
  async getuserid(id: Number){
    return new Promise((resolve, reject) =>{
      db('portafolio')
      .select('*')
      .from('usuarios')
      .where('id', id)
      .then((users : any) => {
        resolve(users);
      }).catch((reason : any) =>{
        reject('Error => '+ reason);
      })
    });
  }
  async insertUser(username: string, password: string){
    return new Promise(async (resolve, reject) =>{
      db('portafolio')
      .insert({
        'id' : await this.countId(),
        'username' : username,
        'password' : password
      }).into('usuarios')
      .then((response) =>{
        resolve(response);
      }).catch((response) =>{
        reject(response);
      })
    })
  }
  async countId(){
    return new Promise((resolve, reject) =>{
      db('portafolio')
      .select('*')
      .from('usuarios')
      .then((users : any) => {
        resolve(users.length);
      }).catch((reason : any) =>{
        reject('Error => '+ reason);
      })
    });
  }
  async getUserName(username: string){
    return new Promise((resolve, reject) =>{
      db('portafolio')
      .select('*')
      .from('usuarios')
      .where('username', username)
      .limit(1)
      .then((users : any) => {
        resolve(users);
      }).catch((reason : any) =>{
        reject('Error => '+ reason);
      })
    });
  }
}