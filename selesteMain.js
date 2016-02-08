var gdAPICompanyResults = []
var userIP = "localhost:8000"
var userAgent ="chrome"

var app = angular.module('seleste', ['ngRoute', 'ngAnimate']);

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'static/partials/home.html',
			controller: 'homeCtrl'
		})
		.when('/about', {
			templateUrl:'static/partials/about.html',
			contoller: 'aboutCtrl'
		});
	});
	
	app.controller('homeCtrl',function($scope, $http) {
		$scope.pageClass = 'homePage';
		
		$scope.company1 = '';
		$scope.company2 = '';
		$scope.company3 = '';
		$scope.gdAPIData = [];
		$scope.companyArray = [];
		console.log("ON LOAD this is GD gdAPIData" + $scope.gdAPIData + $scope.companyArray);

		$scope.submit = function() {
			$scope.companyArray = [$scope.company1, $scope.company2, $scope.company3];
			for (i=0; i<$scope.companyArray.length; i++){
				if ($scope.companyArray[i] === ""){
					$scope.companyArray.pop($scope.companyArray[i]);
				};
			}
			console.log("company array is " + $scope.companyArray);
			// cycle through the items
			for (i = 0; i < $scope.companyArray.length; i++) {
				$scope.coName = $scope.companyArray[i];
			// call the api
				$http.get("http://api.glassdoor.com/api/api.htm?t.p="+GDPartner+"&t.k="+GDKey+"&userip="+userIP + "&useragent="+ userAgent +"&format=json&v=1&action=employers&q=" + $scope.coName)
					 .then(function(response){
					 	$scope.gdAPIData = response.data.response.employers;
					 	if ($scope.gdAPIData.length === 1){
							gdAPICompanyResults.push($scope.gdAPIData);
							console.log("this is the list of objects after a successful call, one " + gdAPICompanyResults);
						} else {
							clarifyQuery($scope.coName, $scope.gdAPIData);
							console.log(" running clarifyQuery " +  $scope.gdAPIData + $scope.coName);
						}
				});
				// if there is only one employer listed, it's an exact match
				
			}

			
		};

		$scope.reset = function(){
			$scope.company1 = '';
			$scope.company2 = '';
			$scope.company3 = '';
			$scope.gdAPIData = [];
			$scope.companyArray = [];
			console.log("RESET this is GD gdAPIData" + $scope.gdAPIData + $scope.companyArray);
		};
	});


	app.controller('aboutCtrl', ['$scope', function($scope) {
		$scope.pageClass = 'aboutPage';
	}]);