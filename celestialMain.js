function(){
	var app = angular.module('celestial', ['ngRoute']);

	app.config(function($routeProvider){
		$routeProvider

			.when('/', {
				templateUrl: '..static/partials/home.html'
			})

			.when('/about', {
				templateUrl: '..static/partials/about.html'
			})

	})
}