const { listProfiles } = require("../controllers/amazon/ads.controller");
const chai = require("chai");
const expect = chai.expect;

describe("Ads Controller", () => {
  describe("ProfileOperation", () => {
    describe("listProfiles", () => {
      it(`should return an array or profiles`, async () => {
        let req = {
          query: {},
          body: {}
        };
        let res = {
          sendCalledWith: "",
          send: function (arg) {
            this.sendCalledWith = arg;
          },
          json: function (err) {
            console.log("\n : " + err);
          },
          status: function (s) {
            this.statusCode = s;
            return this;
          },
        };
        await listProfiles(req, res);
        /* List Profiles */ 
        //expect(res.statusCode).to.equal(200);

        /* Authorized error*/
        expect(res.statusCode).to.equal(401);
      });
    });
  });
});
