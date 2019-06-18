const express = require("express");
const app = express();
const morgan = require("morgan");
var db_tools = require("./tools/db_tools");
const to = require("./to");

const PORT = 3000;

//const {mongoose}=require('./database')
db_tools.DBConnectMongoose()
  .then(() => {
    app.set("port", process.env.PORT || PORT);
    app.use(morgan("dev"));
    app.use(express.json());
    app.listen(PORT, () => {
      console.log("Server running on PORT " + PORT);
    });
  })
  .catch(err => {
    console.log("Error: " + err);
  });
// settings
