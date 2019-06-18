const mongoose = require("mongoose");
const config = require("../config.json");
const URI = "mongodb://" + config.db_config.host + "/" + config.db_config.name;
const to = require("../to");

exports.DBConnectMongoose = async () => {
    const [err,data] = await to(mongoose.connect("URI", { useNewUrlParser: true }));
    if(!data) throw new Error("Error creating db connection: " + err) 
    console.log("Mongo connection created");
};
