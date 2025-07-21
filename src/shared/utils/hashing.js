const bcrypt = require("bcrypt")
async function hasPassword(plainPassword){
    const hash = bcrypt.hash(plainPassword,10)
    return hash
}

async function verifyPassword(plainPassword,hasPassword){
    const hash = bcrypt.compare(plainPassword,hasPassword)
    return hash
}
module.exports = { verifyPassword,hasPassword}