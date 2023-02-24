const request = require("request");

exports.getAccessToken = async (req, res, next) => {
  request.post(
    {
      url: process.env.AUTH_ROOTLINK,
      form: {
        grant_type: process.env.GRANT_TYPE,
        client_id: process.env.CLIENT_ID,
        refresh_token: process.env.REFRESH_TOKEN,
        client_secret: process.env.CLIENT_SECRET,
      },
    },
    (error, httpResponse, body) => {
      try {
        if (error) console.log(error);
        if (httpResponse.statusCode != 200)
          console.log(
            "Something went wrong! Status code: " + httpResponse.statusCode
          );
        let data = JSON.parse(body);
        req.accessToken = data.access_token;
        next();
      } catch (error) {
        console.log("catch");
        if (error) return console.log(error);
      }
    }
  );
};
