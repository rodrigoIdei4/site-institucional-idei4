/*var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/', {controller:'contatoController', templateUrl: 'contato.html'}).
	when('/orcamento', {controller:'orcamentoController', templateUrl: 'orcamento.html'}).
	otherwise({redirectTo: '/'});
}]);

app.controller('contatoController',function ($scope) {
	console.log('contatoController');
});
app.controller('orcamentoController',function ($scope) {
	console.log('orcamentoController');
});*/

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'orcamento.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});