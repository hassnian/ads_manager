const adsDomain=require('../domain/ads')
const {Ad}=require('../db/ads')
const {getValidAds} =require('../factories/ad.factories')
describe('ads',()=>{



    test("reset ads test", () => {
        beforeEach(async () => {
          await Ad.deleteMany({});
        });
      
        afterEach(async () => {
          await Ad.deleteMany({});
        });
        afterAll(async () => {
          await mongoose.connection.close();
        });
      });
      

      test("shows all the ads correctly", async () => {
        const response = await getValidAds(10)
        const mockups = response.ads
        let actual=true; 

        for(let i=0;i<mockups.length;i++){
          const mAd= new Ad(mockups[i]);
          await mAd.save();
        }
      
        const {ads} = await adsDomain.getAllAds();
         ads.forEach((ad,i) => {
          if(ad.title!==mockups[i].title){
                actual= false
            }
        });
        const expected=true;
        expect(actual).toBe(expected);  
      });

      test("if stores an ad successfully", async () => {
        const mockup={ title: "selling something", description: "123" }
        const newAd = new Ad(mockup);
        const actual=true
        const response=await adsDomain.createAd(newAd);
        expect(response.successfull).toBe(actual);
        expect(response.ad.title).toBe(mockup.title);
        expect(response.ad.description).toBe(mockup.description);
      });

      test("if fails storing an ad with invalid params", async () => {
        const mockup={}
        const newAd = new Ad(mockup);
        const actual=false
        const response=await adsDomain.createAd(newAd);
        expect(response.successfull).toBe(actual);
      });

      test("if checkIfAtrIsUndefined() returns true when the asked atribute is undefined", async () => {
        const newAd = new Ad({  description: "example" });
        const actual=await adsDomain.checkIfAtrIsUndefined(newAd,"title");
        const expected = true;
        expect(actual).toBe(expected);
      });
      
      test("if checkIfAtrIsUndefined() returns falsy when the asked atribute is not undefined", async () => {
        const newAd = new Ad({  description: "example" });
        const actual=await adsDomain.checkIfAtrIsUndefined(newAd,"description");
        const expected = false;
        expect(actual).toBe(expected);
      });
      


      
})


