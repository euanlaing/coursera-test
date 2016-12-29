(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.lunchList = "";
  $scope.lunchStatus = "";

  $scope.setLunchStatus = function() {
    var numItems = getNumItems();
    if (numItems == 0) { $scope.lunchStatus = "Please enter data first"; }
    else if (numItems <= 3 ) { $scope.lunchStatus = "Enjoy!"; }
    else {  $scope.lunchStatus  = "Too much!"; }
  }

  function getNumItems() {
    var rawItems = $scope.lunchList;
    if (rawItems.length == 0) {
      return 0;
    }
    else {
      var itemsArr = rawItems.split(",");
      return itemsArr.length;
    }
  }


}

}());
