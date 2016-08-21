angular.module('app', [])
    .service('PhonesService', function ($http) {
        var _phones = [];
        this.getPhones = function (cb) {
            $http.get('data.json').then(function (res) {
                _phones = res.data;
                cb(_phones);
            });
        }
    });
