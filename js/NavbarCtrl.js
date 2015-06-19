function NavbarController($scope, $location) {
	$scope.routeIs = function(routeName) {
	return $location.path() === routeName;
	};	
}
app.controller('NavbarCtrl', NavbarController);