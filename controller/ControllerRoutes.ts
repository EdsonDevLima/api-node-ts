import { Request,response,Response } from "express";
import {methodDb} from "../models/dbFake"
const metodo = new methodDb()
export  class ControllerRoutes{
    static async getAllUser(req:Request,res:Response){
        const alluser = await metodo.getAllUser
        return res.status(200).json({message:alluser})
    }
    static async createUser(req:Request,res:Response){
        const {name,email} = req.body
        if(!name){
            res.status(400).json({message:"nome obrigatorio"}) 
            return
        }
        if(!email){
            res.status(400).json({message:"email obrigatorio"}) 
            return
        }
        try{
            await metodo.createUser({name,email})        
            res.status(201).json({message:"usuario criado",newUser:{name,email}})

        }
        catch(err){
            return response.status(500).json({message:"erro no servidor"})
        }
        
        
        


    }
}