const bcrypt = require("bcrypt")
async function hashPassword(plainPassword){
    const hash = bcrypt.hash(plainPassword,10)
    return hash
}

async function verifyPassword(plainPassword,hashPassword){
    const hash = bcrypt.compare(plainPassword,hashPassword)
    return hash
}
module.exports = { verifyPassword,hashPassword}