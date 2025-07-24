const { Router } = require("express");
const { registerController, loginController } = require("./auth.controller");
const AuthRouter = Router();

AuthRouter.post("/login", loginController);
AuthRouter.post("/register", registerController);
module.exports = AuthRouter;
