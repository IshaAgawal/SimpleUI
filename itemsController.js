var app = angular.module('query',[]);
app.controller('itemsCtrl',['$scope',function($scope){


	$scope.greeting ='Hello, What you want to wish today';

	$scope.itemsPrice = [
							{item : 'Tea', price : 10},
							{item : 'Coffee', price : 15},
							{item : 'Lemon Water', price :15},
							{item : 'Samosa' , price :20},
							{item : 'Kachori' , price : 20},
							{item : 'Idli' , price : 20},
							{item : 'Vada Pav' , price : 25},
							{item : 'Poha' , price : 30},
							{item : 'Dosa' , price : 30},
							{item : 'Upma' , price : 30}							


	];
	
	
	$scope.init = function()
	{
		
		$scope.Range ={min:0, max:50};
		
	}
	
	$scope.toShowRow = function(val)
	{
		$scope.itemCost = val;
		if(parseInt($scope.itemCost) >= $scope.Range.min && parseInt($scope.itemCost) <= $scope.Range.max)
			return true;
		else
			return false;
		
	}
	
	$scope.validationCheck = function(){
		
		if($scope.Range.min == "" && parseInt($scope.Range.min) != 0){
			alert("Fill min");
			return false;
		}
		if($scope.Range.max == ""){
			alert("Fill max");
			return false;
		}
		else{
			
			$scope.tableShow = true;
			
		}
			
		}
	
	
	
}]);