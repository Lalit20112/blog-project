const {registerService} = require("./auth.service")

async function registerController(req,res){ 
    try{ 
        const {name,email,password,role,age} = req.body 
        if(!email || !password){ 
            throw new Error("email and password is require") 
        } 

        const user = await registerService({name ,email,password,role,age}) 
        if(!user){ 
            return res.status(401).send({message: "user not found"}) 
        } 
        res.send({data: user}) 

    }catch(error){ 
        res.send({message: error.message}) 
    } 
}

module.exports = {registerController}