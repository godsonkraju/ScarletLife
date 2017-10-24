
var exploreLevels;

//Explore page level controller
scarletApp.controller('exploreCtrl', function($scope, $http, $location) {


  exploreLevels = angular.element($("#middle-card")).scope();

  // init materialize
  console.log("EXPLORE CONTROLLER");

  setTimeout(
    function()
    {
       loadStuff(); // init jQuery again
    }, 500);


  // Give an href based on loggedin user
  $scope.getUrl = function(id){
    return urlPermission(id);
  }


  $scope.data = {
    singleSelect: null,
    multipleSelect: [],
    option1: 'option-1'
  };
  
  // LOAD EXPLORE LEVELS WITH DATA RETRIEVAL FEEDBACK
  $scope.loading = true;

  // refine query for admin purpose
  var url = "";
  if(email==="scarletlifegame@gmail.com") {
    url = "https://the-scarlet-life.appspot.com/levels";
  } else {
    url = "https://the-scarlet-life.appspot.com/levels/explore";
  }
  $http.get(url)
  .then(function(response) {
    $scope.levels = response.data;
  }, function errorCallback(response) {
    ("A problem occurred while trying to get explore levels.");
  }).finally(function() {
    $scope.loading = false;
  });


//Search Explore Level
$scope.search =  function() 
{
  if($scope.title == "" || $scope.title === undefined){
    $http.get("http://the-scarlet-life.appspot.com/levels/explore")
    .then(function(response) {
      $scope.levels = response.data;
    });

  }
  $http.get("http://the-scarlet-life.appspot.com/levels/explore?title="+ $scope.title)
  .then(function(response) {
    $scope.levels = response.data;
  });
}

  // EDIT LEVEL
  $scope.editLevel = function(id) {
    var url = "http://the-scarlet-life.appspot.com/levels/" + id;
    $http.get(url)
    .then(function successCallback(response) {

        // log success
        console.log("GET editLevel SUCCESS");
        
        // grab level obj
        var level = JSON.stringify(response.data);

        // fill create screen
        editSelectedLevel(level);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs or server returns response with an error status.
        console.log("A problem occurred while trying to load this level for edit.");
      });
  }

  // DELETE LEVEL
  $scope.deleteLevel = function(id){
    console.log("ID RECIEVED: " + id);
    var url = "http://the-scarlet-life.appspot.com/levels/" + id;
    $http.delete(url)
    .then(function successCallback(response) {

        // this callback will be called asynchronously when the response is available
        console.log("DELETE Success");

        // TOAST to notify user of success
        var $toastContent = $('<span>Deleted Level</span>');
        Materialize.toast($toastContent, 5000);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs or server returns response with an error status.
        console.log("DELETE fail.");
        console.log("A problem occurred while trying to delete this level.");
      });
  }

  // PLAY LEVEL
  $scope.getLevel = function(id) {
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


  // FAVORITE LEVEL
  $scope.favoriteLevel = function(id) {
    // console.log("ID RECIEVED: " + id);
    var url = "http://the-scarlet-life.appspot.com/users/addToFavorites/" + email + "/" + id;
    $http.get(url)
    .then(function successCallback(response) {

        // log successful request
        console.log("FAVORITE LEVEL SUCCESS");
        var level = JSON.stringify(response.data)

        // TOAST to notify user of success
        var $toastContent = $('<span>Added to Favorites</span>');
        Materialize.toast($toastContent, 5000);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs or server returns response with an error status.
        console.log("A problem occurred while trying to load this level.");
      });
  }

});



function sort() 
{
  var sortBy = document.getElementById("dropbox").value;
  exploreLevels.$apply(function(){
   url = "http://the-scarlet-life.appspot.com/levels/explore?sort="+ sortBy;
   exploreLevels.levels = JSON.parse(httpGet(url));
 });
}


var reverse = 1;


function reverseSort() 
{
  var sortBy = document.getElementById("dropbox").value;
  var reverseQuery = "";

  if(reverse === 1 ){
    reverseQuery = "-";
  }

  reverse = reverse * -1;

  exploreLevels.$apply(function(){
   url = "http://the-scarlet-life.appspot.com/levels/explore?sort="+ reverseQuery + sortBy;
   exploreLevels.levels = JSON.parse(httpGet(url));
 });
}


function httpGet(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }