const jsonwebtoken = require("jsonwebtoken")
const JWT_SECRET = "root"

async function createToken({uid,email,role,expiry}){
    if(!JWT_SECRET){throw new Error("jwt_secret not found")}
    if(!uid ||!email || !role || !expiry){
        throw new Error("uid,email,role are require for jwt genration")
    }
    const token = jsonwebtoken.sign({uid,email,role},JWT_SECRET,{expiresIn:expiry})
    return token
}
async function generateAccessToken({uid,email,role}){
    return createToken({uid,email,role,expir:"1h"})
}
async function generateRefreshToken({uid,email,role}){
    return createToken({uid,email,role,expiry:604800*2})
}
async function generateLoginTokens({uid,email,role}){
    return{
        accessToken: await generateAccessToken({uid,email,role}),
        refreshToken: await generateRefreshToken({uid,email,role})
    }
}
async function decryptToken(Token){
    if(!JWT_SECRET || !typeof JWT_SECRET !=="String"){
        throw new Error("jwt_secret not found or invalid")
    }
    if(!Token || !typeof Token !=="String"){
        throw new Error("token is required and must be string")
    }
    try{
        const data = jsonwebtoken.verify(token,JWT_SECRET)
        return {
            uid: data.uid,
            email:data.email,
            role:data.role,
        }
    }catch(error){
        throw new Error("invalid or expiry token")
    }
}
module.exports = {
    createToken,
    generateAccessToken,
    generateLoginTokens,
    generateRefreshToken,
    decryptToken
}