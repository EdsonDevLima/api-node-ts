import express,{Request,response,Response} from "express"
import {ControllerRoutes} from"../controller/ControllerRoutes"
const app = express()

app.use(express.json())
app.get("/",ControllerRoutes.InitialRequest)
app.post("/user",ControllerRoutes.postUser)


app.listen(4000,()=>{
    console.log("server on")
})