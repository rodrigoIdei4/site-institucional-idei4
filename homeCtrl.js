$stateProvider.state('Home', {
  template: '<h1>{{title}}</h1>',
  controller: function($scope){
    $scope.title = 'Rodrigo';
  }
})