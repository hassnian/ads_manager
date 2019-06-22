const adsDB = require("../db/ads");

exports.getAllAds = async function() {
  try {
    const response = await adsDB.getAllAds();
    return { successfull: true, ads: response };
  } catch (err) {
    console.log("Error showing all ads: " + err);
    return { successfull: false };
  }
};

exports.createAd = async function(adData) {
  try {
    const response = await adsDB.saveAd(adData);
    return { successfull: true, ad: response };
  } catch (err) {
    // console.log("Error creating and ad: " + err);
    return { successfull: false };
  }
};

exports.checkIfAtrIsUndefined = async function(ad, atr) {
  return !ad[atr];
};
