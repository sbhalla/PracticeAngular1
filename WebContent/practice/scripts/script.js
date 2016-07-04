

	var myController = function($scope)
	{
		
		var employee = {
				firstName : "David",
				lastName : "Hastings",
				gender :"Male"
		};
		
		
		
	   $scope.employee=employee;
	};
	
	var myApp = angular.module("myModule", []).controller("mycontroller", myController);