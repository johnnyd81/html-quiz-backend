const express = require("express");
require("dotenv").config();
const cors = require("cors");
const route = require("./route/question-route");

//initiate an express app
const app = express();

//middleware
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/questions", route);

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
