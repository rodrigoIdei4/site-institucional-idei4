var app = angular.module('app',['ngRoute']);

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
});