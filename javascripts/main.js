var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/search', {
			templateUrl: 'views/searchform.html',
			controller: 'searchform'
		}).
		when('/results', {
			templateUrl: 'views/results.html',
			controller: 'results'
		}).
		when('/call-list', {
			templateUrl: 'views/call-list.html',
			controller: 'calllist'
		}).
		otherwise({
			redirectTo: '/search'
		});
	}
]);
