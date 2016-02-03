var app = angular.module('seleste', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/home.html',
			controller: 'homeCtrl'
		});
	});
	
	app.controller('homeCtrl',['$scope',function($scope) {
		$scope.company1 = '';
		$scope.company2 = '';
		$scope.company3 = '';

		$scope.reset = function(){
			$scope.company1 = '';
			$scope.company2 = '';
			$scope.company3 = '';
		}

		$scope.submit = function() {
			console.log($scope.company1);
		};
	}]);