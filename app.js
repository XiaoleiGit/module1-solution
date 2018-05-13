(function() {
  'use strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.inputString='';
    $scope.message = '';
    $scope.check = function() {
      $scope.putComment ='';
      var arrayOfString = $scope.inputString.split(',');
      var i = arrayOfString.indexOf('');
      if(i>-1) {
        arrayOfString.splice(i,1);
        $scope.putComment='An empty string is not considered as an item!'
      };
      if (arrayOfString.length == 0) {
        $scope.message='Please enter data first';
        $scope.putComment='An empty string is not considered as an item!'
      } else if (arrayOfString.length <= 3) {
        $scope.message='Enjoy!';
      } else if (arrayOfString.length > 3) {
        $scope.message='Too much!';
      }
    };

  };

})();
