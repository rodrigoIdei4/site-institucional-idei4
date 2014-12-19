var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/', {controller:'contatoController', templateUrl: 'contato.html'}).
	when('/orcamento', {controller: 'orcamentoController', tempplateUrl: 'orcamento.html'}).
	otherwise({redirectTo: '/'});
}]);