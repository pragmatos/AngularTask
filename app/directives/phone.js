angular.module('app')
    .directive('phone', function (){
        return {
            replace: true,
            scope: {
                item: '='
            },
            templateUrl: './templates/phone.html',
            link: function(scope, el, attr){
                scope.moreshow = false;
                scope.showDetails = function(ev, item){
                    ev.stopPropagation();
                    scope.$emit('show', item);
                };
                scope.toggle = function(){
                    scope.$emit('closeDetail');
                    scope.moreshow = !scope.moreshow;
                };

            }
        };
    });