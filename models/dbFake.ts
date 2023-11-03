type user = {
    name:string,
    email:string
}
const db:user[]  = [
    {name:"Edson",email:"EdsonLima@gmail.com"}
]

export class methodDb{
     createUser(newUser:user){
        db.push(newUser)
        console.log(db)
    }
     getAllUser(){
        console.log(db)
        return db
    }
} 