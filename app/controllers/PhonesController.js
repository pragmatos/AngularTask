angular.module('app')
    .controller('PhonesController', ['PhonesService', function (PhonesService) {
        var vm = this;

        vm.phones = [];
        PhonesService.getPhones(function (phones) {
            vm.phones = phones;
        });
    }]);