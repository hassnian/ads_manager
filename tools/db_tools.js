const mongoose = require("mongoose");
const config = require("../config.json");
const URI = "mongodb://" + config.db_config.host + "/" + config.db_config.name;
const to = require("../to");

exports.DBConnectMongoose = async () => {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true });
    //console.log("Mongo connection created");
  } catch (err) {
    throw new Error("Error creating db connection: " + err);
  }
};
