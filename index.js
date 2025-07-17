const express = require("express")
const connectDB = require("./src/config/connecgtDB")
const app = express()
const port = 8080

connectDB()
.then(()=>{
    app.listen(port,() =>{
        console.log(`server is running port = ${port}`)
    })
}).catch((error) =>{console.log(error)})