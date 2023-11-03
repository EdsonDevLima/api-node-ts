import {methodDb} from "./dbFake"
//describe e um grupo de teste
describe("methodDb",()=>{
    const metodos = new methodDb
    it("adiciona um usuario",()=>{
        const mockConsole =  jest.spyOn(global.console,"log")
        metodos.createUser({name:"teste",email:"teste@teste.com"})
        expect(mockConsole).toHaveBeenCalled()

    })
})