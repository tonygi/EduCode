/**
 * The controller doesn't do much more than setting the initial data model
 */
 /* 
	per le caramelle: i box sono numerati come segue:
	| 1 | 2 | 3 | 4 | 5 |
	| 6 | 7 | 8 | 9 | 10|

 */
var json = null;
var caramelle = new Array();
caramelle[0] = 6;
caramelle[1] = 2;
caramelle[2] = 9;
caramelle[3] = 5;

angular.module("demo").controller("NestedListsDemoController", function($scope) {

    $scope.models = {
        selected: null,
        templates: [
            {type: "item", id: 2},
            {type: "container", id: 1, columns: [[], []]}
        ],
        dropzones: {
            "Azioni": [
				{
					"type": "item",
					"name": "Passo",
					"id": "5"
				},
				{
					"type": "item",
					"name": "Passo",
					"id": "4"
				},
				{
					"type": "item",
					"name": "Salto",
					"id": "3"
				},
				{
					"type": "item",
					"name": "Salto",
					"id": "2"
				},
                
            ],
            "Start": [
               
            ]
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
		json = $scope.modelAsJson;
		checkPlay();
    }, true);

});
