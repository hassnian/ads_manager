const express = require("express");
const app = express();
const morgan = require("morgan");
const db_tools = require("./tools/db_tools");
const to = require("./to");

const PORT = 3000;

db_tools.DBConnectMongoose()
  .then(() => {
    const routes = require('./routes/routes');
    app.set("port", process.env.PORT || PORT);
    app.use(morgan("dev"));
    app.use(express.json());
    routes.assignRoutes(app);
    app.listen(PORT, () => {
      console.log("Server running on PORT " + PORT);
    });
  })
  .catch(err => {
    console.log("Error is: " + err);
  });
// settings
