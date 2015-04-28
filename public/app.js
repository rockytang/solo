var myApp = angular.module('myApp', []);

myApp.run(function($rootScope){
  $rootScope.yourName = "Rocky T";
})

myApp.controller('appCtrl', ['$scope', '$http',function($scope, $http){
  $scope.yourName = {
    name: "Rocky Tang"
  }
  $scope.diceRoll = function(){
    $scope.data = {
      type: "food"
    }

    $http.get('/get')
      .success(function(data, status){
        console.log(data);
        console.log(status);
        $scope.data = data;
      }).error(function(data,status){
        console.log(data);
        console.log(status);      
      })
  }
}])