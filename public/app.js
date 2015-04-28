var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http',function($scope, $http){
  $scope.yourName = "Rocky T";
  $scope.term = "italian";


  $scope.diceRoll = function(){

// port request is probably gzipped
// on server need to unzip with encoder and parse with body parser
    $http.post('/post', {
      "term": $scope.foodType,
      "location": $scope.location,
      "radius_filter": $scope.distance,
      "limit": $scope.number,
      // limit is up to 20
    })
    .success(function(data, status){
      console.log(data);
      // console.log(status);
      $scope.dataName = data.name;
      $scope.dataRating = data.rating;
      $scope.dataUrl = data.url;
      $scope.dataSnippetText = data.snippet_text;
      $scope.dataImageUrl = data.image_url;
    })
    .error(function(data,status){
      console.log(data);
      console.log(status);      
    })
  }
}])
