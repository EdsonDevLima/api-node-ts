import {methodDb} from "./dbFake"
import { user } from "./dbFake"
//describe e um grupo de teste
describe("methodDb",()=>{
    const dbFake:user[] = [{name:"teste",email:"teste@test"}]
    const metodos = new methodDb(dbFake)
    it("adiciona um usuario",()=>{
        const mockConsole =  jest.spyOn(global.console,"log")
        metodos.createUser({name:"teste",email:"teste@teste.com"})
        expect(mockConsole).toHaveBeenCalledWith("deu certo",dbFake)

    })
})