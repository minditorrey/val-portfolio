var app = angular.module('valApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/templates/home.html',
			controller: 'homeController'
		})
		.state('work', {
			url: '/work',
			templateUrl: '/templates/work.html',
			controller: 'workController'
		})
		.state('list', {
			url: '/list',
			templateUrl: '/templates/list.html',
			controller: 'workController'
		})
		.state('details', {
			url: '/details',
			templateUrl: '/templates/details.html',
			controller: 'workController'
		})
		.state('about', {
			url: '/about',
			templateUrl: '/templates/about.html',
			controller: 'aboutController'
		})




	$urlRouterProvider.otherwise('/');

});