var app = angular.module('seleste', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/home.html',
			controller: 'homeCtrl'
		});
	});
	
	app.controller('homeCtrl', function($scope) {
		$scope.message ="it worked!!";
	})