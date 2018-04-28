angular.module('products')
.controller('productsController', function($scope,$window,$mdDialog,$mdToast,$location,productsFactory) {
    var contentData;
    contentData = null;
    //console.log($scope);

    $scope.username = $window.localStorage.getItem("user");
    console.log($scope.username);

    $scope.readProducts = function () {
        productsFactory.readProducts().then(function successCallback(response) {
            $scope.products = response.data;
        });
    }

    // methods for dialog box
    function DialogController($scope, $mdDialog) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }

    $scope.showCreateProductForm = function () {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: '/templates/create_product.template.html',
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullscreen: true
        });
    }

    // create new product
    $scope.createProduct = function(){
        productsFactory.createProduct($scope).then(function successCallback(){
            $scope.contentData=false;
            $scope.readProducts();
            $scope.cancel();
            $scope.clearProductForm();

        });
    }

    // confirm product deletion
    $scope.confirmDeleteProduct = function(event, article_id){

        $scope.article_id = article_id;

        var confirm = $mdDialog.confirm()
            .title('Are you sure?')
            .textContent('Product will be deleted.')
            .targetEvent(event)
            .ok('Yes')
            .cancel('No');

        $mdDialog.show(confirm).then(
            function() {
               $scope.deleteProduct();
            }
        );
    }

    //delete product
    $scope.deleteProduct = function(){
        productsFactory.deleteProduct($scope.article_id).then(function successCallback(){
           $scope.readProducts();
        });
    }

    //getbyid
    $scope.readOneProduct = function(article_id){

        productsFactory.fetchProduct(article_id).then(function successCallback(response){
           // console.log(article_id);
            $scope.contentData=true;
            $scope.article_id = response.data.article_id;
            $scope.title = response.data.title;
            $scope.category = response.data.category;

            $mdDialog.show({
                controller: DialogController,
                templateUrl: '/templates/create_product.template.html',
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                fullscreen: true
            }).then( function() {
                     $scope.clearProductForm();
                }
            );

        });
    }

    //update products
    $scope.updateProduct = function(){

        productsFactory.updateProduct($scope).then(function successCallback(){
            $scope.readProducts();
            $scope.cancel();
            $scope.clearProductForm();
        });
    }

    //search products
    $scope.searchProducts = function() {
        productsFactory.searchProducts($scope.product_search_keywords).then(function successCallback(response){
            $scope.products = response.data;
        })
    }

    //clear form
    $scope.clearProductForm=function(){
        $scope.title='';
        $scope.category='';
    }

   // logout
   $scope.logout=function(){
       $window.localStorage.removeItem("user");
        $location.path('/login');
   }

});



