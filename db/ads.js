var db_tools = require("../tools/db_tools");
var mongoose = require("mongoose");
const { Schema } = mongoose;

// database connect
var db = db_tools.DBConnectMongoose();

// Create a Mongoose schema
const AdSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  publicationDate: { type: Date, required: true, default: Date.now }
});

// Register the schema
const Ad = mongoose.model("Ad", AdSchema);
exports.Ad = Ad;

exports.getAllAds = async function() {
  try {
    const ads = await Ad.find();
    return ads;
  } catch (err) {
    console.log("Error showing all ads: " + err);
    return false
  }
};

exports.saveAd = async function(adData) {
  var ad = new Ad(adData);
  try {
    const response = await ad.save();
    return response;
  } catch (err) {
     // console.log("Error saving all ads: " + err);
      throw Error(err);
  }
};

exports.getAdsByIds = function(adIds) {
  return new Promise(function(resolve, reject) {
    Ad.find({ _id: { $in: adIds } })
      .then(ad => {
        resolve(ad);
      })
      .catch(err => {
        reject(err);
      });
  });
};
