const express = require("express");
const cors = require("cors");

const connectDB = require("./src/config/connecgtDB");
const AuthRouter = require("./src/features/auth/auth.routes");

const app = express();
const port = 8080;
app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

app.use("/auth", AuthRouter);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running port = ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
