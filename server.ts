import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const users = require("./routes/api/users");

// DB config
const db = require("./config/keys").mongoURI;

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//connect to mongoDB
mongoose
  .connect(
    db
    // { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/users", users);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
