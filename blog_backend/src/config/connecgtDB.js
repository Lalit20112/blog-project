const {connect} = require('mongoose')
async function connectDB(){
    await connect("mongodb+srv://Lalit:vOuLo1C448331IRs@lalit.hrwvb.mongodb.net/")
}
module.exports = connectDB
