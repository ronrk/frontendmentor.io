require("express-async-errors");
require("dotenv").config();

const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();

const connectDB = require("./db/connectDB");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authMiddleware = require("./middleware/authentication");

const authRoute = require("./routes/auth-route");
const tasksRoute = require("./routes/tasks-route");

app.set("trust proxy", 1);

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.static("../todo-app/build"));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// app.get("/", (req, res) => {
//   res.send("home route");
// });

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tasks", authMiddleware, tasksRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5010;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("app is listening on port 5010...."));
  } catch (error) {
    console.log(error);
  }
};

start();
