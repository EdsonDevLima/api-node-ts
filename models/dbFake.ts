type user = {
    name:string,
    email:string
}
const db:user[]  = [
    {name:"Edson",email:"EdsonLima@gmail.com"}
]

export class methodDb{
    static createUser(newUser:user){
        db.push(newUser)
        console.log(db)
    }
    static getAllUser(){
        console.log(db)
        return db
    }
} 