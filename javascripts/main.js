var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('', '/searchform');

  $stateProvider
	.state('searchform', {
		url: '/searchform',
		templateUrl: 'views/searchform.html',
		controller: 'searchform'
	})
	.state('results', {
		url: '/results',
		templateUrl: 'views/results.html',
		controller: 'results'
	})
	.state('call-list', {
		url: '/call-list',
		templateUrl: 'views/call-list.html',
		controller: 'calllist'
	});

});
