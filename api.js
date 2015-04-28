var yelp = require("./api_key.js")

var search = function(req, res){
  yelp.search({
      term: req.body.term,
      location: req.body.location,
      radius_filter: req.body.radius_filter,
      limit: req.body.limit,
      sort: "2"
    },

  function(error, data){
    if(error) {console.log(error)};
    console.log('name: ', data.businesses);
    // console.log('rating: ', data.businesses[0].rating);
    // console.log('url: ', data.businesses[0].url);
    var randomNum = Math.floor(Math.random() * req.body.limit)

    var sendData = {
      'name': data.businesses[randomNum].name,
      'rating': data.businesses[randomNum].rating,
      'url': data.businesses[randomNum].url,
      'snippet_text': data.businesses[randomNum].snippet_text,
      'image_url': data.businesses[randomNum].image_url
    }

    res.send(sendData);
  })
}

module.exports.search = search;


