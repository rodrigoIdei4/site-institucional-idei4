var App = angular.module('App', ['ui.router']);
App.config(function($stateProvider){
    $stateProvider
        .state('index', {
            url: "",
            views:{
                "devSite": {templateUrl: "pages/dev-sites.html"},
                "idVisual": {templateUrl: "pages/id-visual.html"}
            }
        })
        .state('orcamentoDev', {
            url: "/orcamentoDev",
            views:{
                "devSite": {templateUrl: "pages/orcamento.html"},
                "idVisual": {templateUrl: "pages/id-visual.html"}
            }
        })
        .state('route2', {
            url: "/route2",
            views:{
                "viewA": {template: "route2.viewA"},
                "viewB": {template: "route2.viewB"}
            }
        })
})