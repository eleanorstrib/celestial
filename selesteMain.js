var gdAPICompanyResults = []

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
		$scope.gdAPIData = {};


		$scope.submit = function() {
			var companyArray = [$scope.company1, $scope.company2, $scope.company3];
			for (i=0; i<companyArray.length; i++){
				if (companyArray[i] === ""){
					companyArray.pop(companyArray[i]);

				};
			}
			console.log(companyArray);
			// cycle through the items
			for (i=0; i<companyArray.length; i++) {
				var coName = companyArray[i];
			// call the api
				$http.get("http://api.glassdoor.com/api/api.htm?t.p="+GDPartner+"&t.k="+GDKey+"&userip="+userIP + "&useragent="+ userAgent +"&format=json&v=1&action=employers&q=" + coName)
					 .then(function(response){
					 	$scope.gdAPIData = response.data;
					 	console.log(typeof response.data);
					 	console.log(response.data);
					 // 	if (gdAPIData.employers.length === 1){
						// 	gdAPICompanyResults.push(gdAPIData);
						// } else {
						// 	clarifyQuery(coName, gdAPICompanyResults);
						// }
				});
				// if there is only one employer listed, it's an exact match
				
			}

			
		};

		$scope.reset = function(){
			$scope.company1 = '';
			$scope.company2 = '';
			$scope.company3 = '';
		};
	});


	app.controller('aboutCtrl', ['$scope', function($scope) {
		$scope.pageClass = 'aboutPage';
	}]);