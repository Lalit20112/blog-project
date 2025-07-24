const {Schema, model} = require("mongoose")
const {hashPassword} = require("../../shared/utils/hashing")
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
authSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hashPassword(this.password);

  next();
});
const AuthModel = model("User",authSchema)
module.exports = AuthModel