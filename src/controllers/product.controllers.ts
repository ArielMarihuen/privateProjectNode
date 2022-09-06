
import { Request, Response } from "express";

export class ProductController{

    async getproduct(req : Request, res : Response){

        res.status(200).json({
            message : "Has obtenido un productos",
        });

    }


}