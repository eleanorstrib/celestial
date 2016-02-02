var app = angular.module('seleste', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/home.html',
			controller: 'homeCtrl'
		});
	});
	
	app.controller('homeCtrl',['$scope', function($scope) {
			var self=this;
			$scope.company1 = ''
			$scope.company2 = ''
			$scope.company3 =''
			self.submit = function(){
				$scope.message = 'looks good';
				console.log(this.company1 + this.company2 + this.company3);
			};
		}]);