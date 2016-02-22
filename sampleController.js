(function (angular) {
	var index = angular.module('index',[]);
	index.controller('sampleCTRL', ['$scope', function($scope){
		$scope.spicy = "Spicy Guy";
		$scope.veryspicy = function(){
			$scope.spicy = "Very Spicy Guy";
		};
		$scope.extraSpicy = function(){
			$scope.spicy= "Extra Spicy Guy";
		};
	}]);
})(window.angular);