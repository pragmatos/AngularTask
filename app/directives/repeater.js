angular.module('app')
    .directive('repeater', function ($compile){
        return {
            transclude: true,
            scope: {
                data: '='
            },
            compile: function(elem, attrs, transclude) {
                return function($scope, $elem, $attrs) {
                    $scope.$watch('data', function(data) {
                           for(var key in data) {
                            var val = data[key],
                                childScope = $scope.$new();
                                childScope.$index = key;
                                childScope.$value = val;

                            transclude(childScope, function(clone, innerScope) {
                                $elem.append($compile(clone)(innerScope));
                            });

                        }
                    });
                };
            }
        };
    });