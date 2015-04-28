var yelp = require("./api_key.js")


var search = function(){
  yelp.search({
      term: "chinese",
      location: "94102",
      sort: "2",
      limit: "10",
      radius_filter: "1600"
    },

  function(error, data){
    if(error) {console.log(error)};
    console.log('name: ', data.businesses);
    console.log('rating: ', data.businesses[0].rating);
    console.log('url: ', data.businesses[0].url);
  })
}

module.exports.search = search;



