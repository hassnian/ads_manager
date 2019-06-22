const adsDomain = require("../domain/ads");

exports.getAllAds =  async function(req, res, next){
  try{
    const response=await adsDomain.getAllAds()
    res.json({ ...response });
  }
  catch(err){
    res.status(400).send(err);
  }
};
exports.createAd = async function (req, res, next) {
  try{
    const adData = req.body;
    const response=await adsDomain.createAd(adData)
    res.json({ ...response });
  }
  catch(err){
    res.status(400).send(err);
  }
};