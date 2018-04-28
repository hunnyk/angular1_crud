angular.module('products')
.factory("productsFactory", function($http){

    var factory = {};

    // read all products
    factory.readProducts = function(){
    return $http({

            method: 'GET',
            url: 'http://localhost/phpapi/view_article.php?action=getall'
        });
    };

    // create product
    factory.createProduct = function($scope){
        return $http({
            method: 'POST',
            data: {
                'title' : $scope.title,
                'category' : $scope.category,
            },
            url: 'http://localhost/phpapi/articleapi.php'
        });
    };

    //delete product
    factory.deleteProduct=function(article_id){
        return $http({
           method:'DELETE',
           data:{ 'article_id' : article_id },
           url:'http://localhost/phpapi/delete_article.php?action=delete&id='+article_id
        });
    };

    //getbyid product
    factory.fetchProduct=function(article_id){
        return $http({
            method:'GET',
            data:{'article_id':article_id},
            url:'http://localhost/phpapi/getid_article.php?'+article_id
        });
    };

    // update product
    factory.updateProduct = function($scope){
        return $http({
            method: 'PUT',
            data: {
                'article_id':$scope.article_id,
                'title' : $scope.title,
                'category' : $scope.category
            },
            url: 'http://localhost/phpapi/update_article.php?action=edit&id='+$scope.article_id
        });
    };

    //search product
    factory.searchProducts=function(keywords){
        return $http({
            method:'GET',
            url:'http://localhost/phpapi/search_article.php?action=search&title='+keywords
        });
    };

    return factory;
});
