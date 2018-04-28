angular.module('register')
    .factory('registerService',['$http',
        function ($http) {
            var obj = {};
            obj.post = function (q,object) {
                return $http.post("http://localhost/phpapi/registers/register_api.php?action=save&q="+q,object).then(function (results) {
                    return results;
                },function(){
                    var err = {status:"error",message:"An Internal Error Occured"};
                    return err;
                });
            };
            return obj;
}]);
