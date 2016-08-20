angular.module('app')
    .controller('PhonesController', ['PhonesService','$scope', function (PhonesService, $scope) {
        var vm = this;

        vm.phones = [];
        vm.currentPhone;
        vm.showDetail = false;
        PhonesService.getPhones(function (phones) {
            vm.phones = phones;
        });
        $scope.$on('show', function(ev, item){
            vm.showDetail = true;
            vm.currentPhone = item;
        });
        $scope.$on('closeDetail', function(){
            vm.showDetail = false;
        });
    }]);