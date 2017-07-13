angular.module("demo", ["ngRoute", "dndLists"])
    .config(function($routeProvider) {
        $routeProvider
            
            .when('/level', {
                templateUrl: 'levels/level.html',
                controller: 'NestedListsDemoController'
            })
            .otherwise({redirectTo: '/level'});
    })

 
