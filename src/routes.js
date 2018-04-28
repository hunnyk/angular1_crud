angular.module('app')
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $routeProvider
  .when('/', {templateUrl: '/templates/home.html'})
  .when('/users', {controller: 'UsersCtrl', templateUrl: '/templates/users.html'})
  .when('/users/:login', {controller: 'ShowUserCtrl', templateUrl: '/templates/show_user.html'})
  .when('/products',{controller:'productsController',templateUrl: '/templates/read_products.template.html'})
  .when('/register',{controller:'registerController',templateUrl:'/templates/register.template.html'})
  .when('/login',{controller:'loginController',templateUrl:'/templates/login.template.html'})
  .otherwise({redirectTo: '/templates/login.template.html'});
});

// angular.module('app')
// .config(function($stateProvider, $urlRouterProvider) {
//     $stateProvider
//        .state('home', {
//             url: '/home',
//             templateUrl: '/templates/home.html'
//         })
//         .state('users', {
//             url: '/users',
//             templateUrl: '/templates/users.html',
//             controller: 'UsersCtrl'
//         })
//         .state('products', {
//             url: '/page3',
//             templateUrl: 'page3.html',
//             controller:'productsController'
//         })
//         .state('register', {
//             url: '/register',
//             templateUrl: '/templates/register.template.html',
//             controller:'registerController'
//         })
//         .state('login', {
//             url: '/login',
//             templateUrl: '/templates/login.template.html',
//             controller:'loginController'
//         })
//     $urlRouterProvider.otherwise('/home');
// });
