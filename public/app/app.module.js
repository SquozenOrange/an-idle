angular.module('app', ['ngRoute']).config(function($routeProvider, $locationProvider){
        
    $routeProvider
        .when('/',
        {
            redirectTo: '/home'
        })
        .when('/home',
        {
            template: '<command-center></command-center>'
        })
        .when('/cargo-hold', 
        {
            template: '<cargo-hold></cargo-hold>'
        })
        .when('/ship-yard', 
        {
            template: '<ship-yard></ship-yard>'
        })
        .otherwise({
            redirectTo: '/home'
        });

    $locationProvider.html5Mode(true);
    
});