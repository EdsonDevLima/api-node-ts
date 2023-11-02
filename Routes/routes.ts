import { Router } from "express";
import {ControllerRoutes} from"../controller/ControllerRoutes"

const routes = Router()

routes.get("/all",ControllerRoutes.getAllUser)
routes.post("/user",ControllerRoutes.createUser)

export default routes