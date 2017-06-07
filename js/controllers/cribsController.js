angular
	.module('ngCribs')
	.controller('cribsController', function($scope , cribsFactory) {
		
	$scope.title = 'ng - Cribs'; 
	$scope.cribs;
	
	$scope.priceInfo = {
		min: 0 ,
		max: 1000000
	};

	$scope.newListing = {};

	$scope.addCrib = function(newListing){
		newListing.image = 'default-crib';
		$scope.cribs.push(newListing);
		$scope.newListing = {};
	}

	$scope.editCrib = function(crib){
		$scope.showEdit = true ;
		$scope.existingListing = crib;
		

	}
	$scope.saveEditCrib = function(){
		$scope.showEdit = false ;
	}

	$scope.deleteCrib = function(existingListing){
		var index = $scope.cribs.indexOf(existingListing);
		$scope.cribs.splice(index , 1);
		$scope.existingListing = {};
		$scope.showEdit = false ;		
	}



	cribsFactory.getCribs().success(function(data){
		$scope.cribs = data;
	}).error(function(error){
		consle.log(error);
	});

	$scope.sayHello = function(){
		alert('what');
		console.log('some shithead preesed the button');
	}
		
	
	});