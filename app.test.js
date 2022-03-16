let expect = require("chai").expect;
let request = require("request");

describe("Status and content", function () {
  describe("status code 200", function () {
    let payload = {
      url: "http://localhost:3002/api",
      method: "POST",
      body: {
        search: "adele",
        media: "music",
      },
      json: true,
      headers: { "Content-Type": "application/json" },
    };
    /* Timeout increased to 7 seconds to avoid time out error for 
    on a slow internet connection 
   */
    it("status 200", (done) => {
      request(payload, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    }).timeout(7000);

    it("content", (done) => {
      request(payload, function (error, response, body) {
        expect(body.results[0].wrapperType).to.equal("track");
        done();
      });
    }).timeout(7000);
  });
});
