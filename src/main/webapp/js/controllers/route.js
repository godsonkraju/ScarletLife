// create the module and name it scarlet life app
var scarletApp = angular.module('scarlet-life', ['ngRoute']);

// configure the routes
scarletApp.config(function($routeProvider) {
  $routeProvider

    // route for home page
    .when('/', {
      name       : 'index',
      url        : '/',
      templateUrl: 'pages/middle-card-login.html',
      controller : 'mainController'
    })

    // route for home page
    .when('/usr', {
      name       : 'usr',
      templateUrl: 'pages/middle-card-index.html',
      controller : 'mainController'
    })

    // secret page for admin only
    .when('/secretpage' ,{
    templateUrl: "pages/middle-card-admin.html",
    resolve:{
        "check":function(accessFac,$location){   //function to be resolved, accessFac and $location Injected
            if(accessFac.checkPermission()){    //check if the user has permission -- This happens before the page loads
                console.log("Passed security test.");
                $location.path('#/middle-card-admin'); 
            }else{
                $location.path('/');                //redirect user to home if it does not have permission.
                alert("You don't have access here");
            }
        }
    }
    })
    

    // route for about page
    .when('/about', {
      name        : 'about',
      templateUrl : 'pages/middle-card-about.html',
      controller  : 'aboutController'
    })

    // route for the help page
    .when('/help', {
      name        : 'help',
      templateUrl : 'pages/middle-card-help.html',
      controller  : 'helpController'
    })

    // route for the terms page
    .when('/terms', {
      name        : 'terms',
      templateUrl : 'pages/middle-card-terms.html',
      controller  : 'termsController'
    })

    // route for the create page
    .when('/create', {
      name        : 'favorites',
      templateUrl : 'pages/middle-card-create.html',
      controller  : 'levelFormCtrl'
    })

    // route for the explore page
    .when('/explore', {
      name        : 'explore',
      templateUrl : 'pages/middle-card-explore.html',
      controller  : 'exploreCtrl'
    })

    // route for the favorites page
    .when('/favorites', {
      name        : 'favorites',
      templateUrl : 'pages/middle-card-favorites.html',
      controller  : 'favoriteCtrl'
    })

    // route for the favorites page
    .when('/myLevels', {
      name        : 'favorites',
      templateUrl : 'pages/middle-card-my-levels.html',
      controller  : 'mylevelCtrl'
    })

    // route for the level select page
    .when('/level-select', {
      name        : 'levelselect',
      templateUrl : 'pages/middle-card-level-select.html',
      controller  : 'levelSelectController'
    })

    // route for the level select page
    .when('/contact', {
      name        : 'contact',
      templateUrl : 'pages/middle-card-contact.html',
      controller  : 'contactController'
    })

    // route for the play page
    .when('/play', {
      name        : 'play',
      templateUrl : 'pages/middle-card-play.html',
      controller  : 'playController'
    });


    // // default route
    // otherwise({
    //     redirectTo: '/'
    // })

});


scarletApp.factory('accessFac',function(){
    var obj = {}
    this.access = false;

    // gives the user the permission, set to true
    obj.getPermission = function(){  

        if(email === "scarletlifegame@gmail.com")  {
          this.access = true;
          console.log("Granted admin access.");
        } else {
          this.access = false;
        }
        
    }
    obj.checkPermission = function(){
        console.log("Confirmed access, baby!");
        return this.access;             //returns the users permission level 
    }
    return obj;
});

scarletApp.controller('testCtrl',function($scope,accessFac){
    $scope.getAccess = function(){
        accessFac.getPermission();       //call the method in acccessFac to allow the user permission.
    }
});


 if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }