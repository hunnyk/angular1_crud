angular.module('login')
.controller('loginController',function($scope, $location, $window,loginService){
    $scope.login = {};

    $scope.doLogin = function (rec) {
        loginService.post('login',rec).then(function (results) {
            console.log(results);
            console.log(results.data);
            console.log(results.data[3]);
            //console.log(results.data.msg);
            if(results.data.msg==="notfound"){
               $location.path('/login');
            }
            else{
                $window.localStorage.setItem("user",results.data[1])
                $location.path('/products');
            }
        });
    };
});
