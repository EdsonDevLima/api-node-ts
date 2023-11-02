import express,{Request,response,Response} from "express"
import routes from "../Routes/routes"
const app = express()

app.use(express.json())
app.use("/",routes)


app.listen(4000,()=>{
    console.log("server on")
})