import { Request,Response } from "express";
export  class ControllerRoutes{
    static InitialRequest(req:Request,res:Response){
        return res.status(200).json({message:"resposta"})
    }
    static postUser(req:Request,res:Response){
        console.log(req.body)
        res.status(201).json({message:"usuario criado"})
    }
}