
const ads=require('./ads.routes');

exports.assignRoutes = function (app) {
    app.get('/ad', ads.getAllAds);
    app.post('/ad', ads.createAd);

}