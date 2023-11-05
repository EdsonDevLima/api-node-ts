import {ControllerRoutes} from"./ControllerRoutes"
import { methodDb } from "../models/dbFake"
import { json, Request,Response } from "express"
import {Params} from "express-serve-static-core"

type mockResponse<TResult> = Response & {state:{
    status?:number,
    json?:TResult

}}

describe("userController",()=>{
    const mokuserService:Partial<methodDb> = {}
    const userController = new ControllerRoutes(mokuserService as methodDb)
    const mockRequest = ({params,query}:{params?:Params,query?:Params}):Request=>{
        const request = {
            params:params || {},
            query:query || {}
        } as unknown

        return request as Request
    }


    function makeMockResponse ()<TResult>{
        const response = {
            state:{}

        } as mockResponse<TResult>

        response.status = (status:number)=>{
            response.state.status = status
            return response
        }
        response.json = (json:TResult)=>{
            response.state.json = json
            return response
        }
            return response

    }

    it("deve criar um novo usuario",()=>{
        const makeMockRequest = mockRequest({})
        const response = userController.createUser(makeMockRequest)
    })
})