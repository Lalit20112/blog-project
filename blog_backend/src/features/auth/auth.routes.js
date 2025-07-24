const {Router} = require("express")
const {registerController} = require("./auth.controller")
const AuthRouter = Router()

AuthRouter.post("/register", registerController)
module.exports = AuthRouter


