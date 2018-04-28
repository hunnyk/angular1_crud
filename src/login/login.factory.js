angular.module('login')
.factory('loginService',['$http',
    function ($http) {
       var obj = {};
        obj.post = function (q,object) {
             return $http.post("http://localhost/phpapi/registers/login_api.php",object).then(function (results) {
                 console.log(q);
                 console.log(results);
                 return results;
             },function(){
                 var err = {status:"error",message:"An Internal Error Occured"};
                 return err;
             });
        };
    return obj;
}]);
