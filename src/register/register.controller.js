angular.module('register')
    .controller('registerController',function ($scope, $location, registerService){
        $scope.signup = {};

        $scope.signUp = function (data) {
            registerService.post('signup', data).then(function (results) {
                registerService.toast(results);
                if (results.status === "success") {
                    console.log(results.status);
                    $location.path('products');
                }
            });
        };

});
