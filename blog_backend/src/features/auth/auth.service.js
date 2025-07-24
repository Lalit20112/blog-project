const AuthModel = require("./auth.model");
const { verifyPassword } = require("../../shared/utils/hashing");
const { generateLoginTokens } = require("../../shared/utils/jwt");

async function loginService({ email, password }) {
  const user = await AuthModel.findOne({ email }).lean();

  if (!user) throw new Error("user dont exist");

  const isPasswordValid = await verifyPassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error("invalid credentials ");
  }
  const userWithoutPssword = { ...user };
  delete userWithoutPssword.password;

  const { accessToken, refreshToken } = await generateLoginTokens({
    uid: userWithoutPssword._id,
    email: userWithoutPssword.email,
    role: userWithoutPssword.role,
  });

  // const isValidPassword = await verifyPaaword(password,user.password)

  return { ...userWithoutPssword, accessToken, refreshToken };
}

async function registerService({ name, email, password, role, age }) {
  const user = await AuthModel.create({
    name: name,
    email: email,
    password: password,
    age: age,
    role: role,
  });
  return user;
}
module.exports = { registerService, loginService };
