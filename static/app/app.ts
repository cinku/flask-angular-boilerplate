$((): void =>  {
    let app: angular.IModule = angular.module('app', ['ui.router', 'ngMaterial']);
    
    app.controller("HomeController", app.controllers.HomeController);
    
    app.config(['$urlRouterProvider', '$stateProvider', ($urlRouterProvider: ng.ui.IUrlRouterProvider,
                                                                $stateProvider: ng.ui.IStateProvider) => {
        
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('home', {
            url: "/",
            templateUrl: "static/app/partials/home.html",
            controller: "HomeController as HomeCtrl"
        });
    }]);
    
    app.run(() => {
       // run 
    });
    
    angular.bootstrap(document, ['app']);
});