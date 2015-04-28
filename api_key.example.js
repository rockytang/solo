var yelp = require("yelp").createClient({
  consumer_key: "", // enter keys
  consumer_secret: "",
  token: "",
  token_secret: ""
});

module.exports = yelp;

// enter keys and delete '.example' from the file name
