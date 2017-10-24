
var favorites;

//Favorite page level controller
scarletApp.controller('favoriteCtrl', function($scope, $http, $location) {

  

  favorites = angular.element($("#test3")).scope();

  console.log("FAVORITES CONTROLLER");
  setTimeout(
    function()
    {
       loadStuff(); // init jQuery again
    }, 500); 

  // Give an href based on loggedin user
  $scope.getUrl = function(id){
    return urlPermission(id);
  }


  // LOAD THE FAVORITES
  $scope.reloadTry = function(id) {
    console.log("HERE");

    $scope.loading = true;
    var url = "http://the-scarlet-life.appspot.com/levels/favorites?username="+email;
    console.log(url);
    $http.get(url)
      .then(function successCallback(response) {
          $scope.levels = response.data;
          console.log("Loaded favorites.");
        }, function errorCallback(response) {
          console.log("A problem occurred while trying to get favorites levels.");
        }).finally(function(){
          $scope.loading = false;
        });
  }


  $scope.helpMe = function(){
    console.log("TRYING TO HELP");
    $scope.reloadTry();

    setTimeout(
    function()
    {
        console.log("loading");
       loadStuff(); // init jQuery again
    }, 500);

  }


  // GET THE LEVELS FROM BACKEND ON FIRST LOAD
  $scope.reloadTry();

  // UNFAVORITE A LEVEL
  $scope.unfavoriteLevel = function(id){

    console.log("ID RECIEVED: " + id);
    var url = "http://the-scarlet-life.appspot.com/users/removeFromFavorites/" + email + "/" + id;
    $http.get(url)
    .then(function successCallback(response) {

        // LOG SUCCESS
        console.log("Unfavorite Success");

        // Force refresh the favorites page
        $scope.reloadTry();

        // TOAST to notify user of success
        var $toastContent = $('<span>Unfavorited Level</span>');
        Materialize.toast($toastContent, 5000);
        
      }, function errorCallback(response) {
        console.log("Unfavorite Fail");
        console.log("A problem occurred while trying to unfavorite this level.");
      });

  }

  // PLAY LEVEL
  $scope.getLevel = function(id, $event) {
    console.log("ID RECIEVED: " + id);
    var url = "http://the-scarlet-life.appspot.com/levels/" + id;
    $http.get(url)
        .success(function(){
        
        // on success redirect to href
        href = "play";
        $location.path(href);
    })
    .then(function successCallback(response) {


        // this callback will be called asynchronously when the response is available
        console.log("GET Success");
        var level = JSON.stringify(response.data)

        // Globally link this as the current level being played
        currentLevel = level;

        // Play the loaded level
        playSelectedLevel(level);


      }, function errorCallback(response) {
        // called asynchronously if an error occurs or server returns response with an error status.
        console.log("A problem occurred while trying to load this level.");
      });

  }


  //Search Favorites
  $scope.search =  function() 
  {
    if($scope.title == "" || $scope.title === undefined){
      $http.get("http://the-scarlet-life.appspot.com/levels/favorites?username="+email)
      .then(function(response) {
      $scope.levels = response.data;
    });

    }
    $http.get("http://the-scarlet-life.appspot.com/levels/favorites?username="+email+"&title="+$scope.title)
    .then(function(response) {
    $scope.levels = response.data;
    });

  }
  


});





  function favoriteSort() 
  {
    var sortBy = document.getElementById("dropbox2").value;
    favorites.$apply(function(){
         url = "http://the-scarlet-life.appspot.com/levels/favorites?username="+email+"&sort="+sortBy;
         favorites.levels = JSON.parse(httpGet(url));
         console.log("$$$$$$$$$$$$$$$$$$$$$$$$",favorites.levels);
    });
  }


  var reverse = 1;


  function favoriteReverseSort() 
  {
    var sortBy = document.getElementById("dropbox2").value;
    var reverseQuery = "";

    if(reverse === 1 ){
      reverseQuery = "-";
    }
    
    reverse = reverse * -1;

    favorites.$apply(function(){
         url = "http://the-scarlet-life.appspot.com/levels/favorites?username="+email+"&sort="+ reverseQuery +sortBy;
         favorites.levels = JSON.parse(httpGet(url));
         console.log("################",favorites.levels);
    });
  }


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}