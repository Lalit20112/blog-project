const {Schema, model} = require("mongoose")
const authSchema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    role:{
        type: String,
        default: "user"
    }
})
const AuthModel = model("User",authSchema)
module.exports = AuthModel