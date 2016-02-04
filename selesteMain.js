var app = angular.module('seleste', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/home.html',
			controller: 'homeCtrl'
		});
		// .when('/about', {
		// 	templateUrl:'static/partials/about.html',
		// 	contoller: 'aboutCtrl'
		// });
	});
	
	app.controller('homeCtrl',['$scope',function($scope) {
		$scope.pageClass = 'homePage';
		$scope.company1 = '';
		$scope.company2 = '';
		$scope.company3 = '';

		$scope.reset = function(){
			$scope.company1 = '';
			$scope.company2 = '';
			$scope.company3 = '';
		}

		$scope.submit = function() {
			var companyArray = [$scope.company1, $scope.company2, $scope.company3];
			for (i=0; i<companyArray.length; i++) {
				gdAPICompany(companyArray[i]);
			}
		};

	}]);

	app.controller('aboutCtrl', ['$scope', function($scope) {
		$scope.pageClass = 'aboutPage';
	}]);