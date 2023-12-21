const express = require("express");
const dotenv = require("dotenv");
dotenv.config("./.env");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouter");
const courseRouter = require("./routers/courseRouter");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("common"));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin:
      "https://6583d0903098faa91bd5c003--silly-rolypoly-45b359.netlify.app",
  })
);

app.use("/auth", authRouter);
app.use("/course", courseRouter);
app.get("/", (req, res) => {
  res.status(200).send("OK from server");
});

const PORT = process.env.PORT || 4001;

dbConnect();
app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
