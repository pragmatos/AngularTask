angular.module('app')
    .directive('phone', function (){
        return {
            replace: true,
            scope: {
                item: '='
            },
            templateUrl: './templates/phone.html',
            link: function(scope, el, attr){
                console.log(scope);
            }
        };
    });