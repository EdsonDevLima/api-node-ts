export interface user {
    name:string,
    email:string
}
const db:user[]  = [
    {name:"Edson",email:"EdsonLima@gmail.com"}
]

export class methodDb{
    databaseFake!:user[]

    constructor(database?:user[]){
        if(database){
            this.databaseFake = database
        }
        
    }
     createUser(newUser:user){
        this.databaseFake.push(newUser)
        console.log("deu certo",this.databaseFake)
    }
     getAllUser(){
        console.log(db)
        return db
    }
} 