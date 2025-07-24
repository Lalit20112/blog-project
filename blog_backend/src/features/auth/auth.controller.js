const { registerService, loginService } = require("./auth.service");

async function loginController(req, res) {
  try {
    console.log("dasd => ", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("incorrect mail and password !");
    }
    const user = await loginService({ email, password });

    if (!user) {
      return res.status(401).send({ message: "user not found!" });
    }
    res.send({ data: user });
  } catch (error) {
    console.log(error);
    res.send({ message: error.message || "unexpected eroor!" });
  }
}

async function registerController(req, res) {
  try {
    const { name, email, password, role, age } = req.body;
    if (!email || !password) {
      throw new Error("email and password is require");
    }

    const user = await registerService({ name, email, password, role, age });
    if (!user) {
      return res.status(401).send({ message: "user not found" });
    }
    res.send({ data: user });
  } catch (error) {
    res.send({ message: error.message });
  }
}

module.exports = { registerController, loginController };
