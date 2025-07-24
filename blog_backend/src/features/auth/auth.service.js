const AuthModel = require("./auth.model")

async function registerService({name,email,password,role,age}){
    const user = await AuthModel.create({
        name: name,
        email: email,
        password: password,
        age: age,
        role: role,
    })
    return user
}
module.exports = {registerService}