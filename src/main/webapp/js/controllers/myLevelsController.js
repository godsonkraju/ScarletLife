var myLevels;

// MYLEVELS CONTROLLER
scarletApp.controller('mylevelCtrl', function($scope, $http, $location) {

  myLevels = angular.element($("#test4")).scope();

  console.log("MYLEVELS CONTROLLER");
  setTimeout(
    function()
    {
       loadStuff(); // init jQuery again
     }, 500);


  // Give an href based on loggedin user
  $scope.getUrl = function(id){
    return urlPermission(id);
  }


  // Retrieve the user's levels when asked
  $scope.reloadTry = function(id) {
    $scope.loading = true
    url = "http://the-scarlet-life.appspot.com/levels/mylevels?username=" + email;
    $http.get(url)
    .then(function(response) {
      $scope.levels = response.data;
    }, function errorCallback(response) {
      console.log("A problem occurred while trying to get my levels.");
    }).finally(function() {
      $scope.loading = false;
    });
  }
  

    // Helper function triggers level load on request
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

  // EDIT level on ng-click
  $scope.editLevel = function(id) {
    console.log("ID RECIEVED: " + id);
    var url = "http://the-scarlet-life.appspot.com/levels/" + id;
    $http.get(url)
    .then(function successCallback(response) {
        // this callback will be called asynchronously when the response is available
        console.log("GET Success");
        // grab level obj
        var level = JSON.stringify(response.data)
        // log success
        console.log("Editing selected level....");
        // fill create screen
        editSelectedLevel(level);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs or server returns response with an error status.
        console.log("A problem occurred while trying to load this level for edit.");
      });
  }

  // DELETE level on ng-click
  $scope.deleteLevel = function(id){
    console.log("ID RECIEVED: " + id);
    var url = "http://the-scarlet-life.appspot.com/levels/" + id;
    $http.delete(url)
    .then(function successCallback(response) {
        // this callback will be called asynchronously when the response is available
        console.log("DELETE Success");
        var $toastContent = $('<span>Deleted Level</span>');
        Materialize.toast($toastContent, 5000);
        $scope.reloadTry();
      }, function errorCallback(response) {
        // called asynchronously if an error occurs or server returns response with an error status.
        console.log("DELETE fail.");
        console.log("A problem occurred while trying to delete this level.");
      });
  }

  // GET level on ng-click for playing
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


//Search mylevels
$scope.search =  function() 
{
  if($scope.title == "" || $scope.title === undefined){
    $http.get("http://the-scarlet-life.appspot.com/levels/mylevels?username="+email)
    .then(function(response) {
      $scope.levels = response.data;
    });

  }
  $http.get("http://the-scarlet-life.appspot.com/levels/mylevels?username="+email+"&title="+$scope.title)
  .then(function(response) {
    $scope.levels = response.data;
    console.log(response.data);
  });

}


});


function myLevelSort() 
{
  var sortBy = document.getElementById("dropbox1").value;
  myLevels.$apply(function(){
   url = "http://the-scarlet-life.appspot.com/levels/mylevels?username="+email+"&sort="+sortBy;
   myLevels.levels = JSON.parse(httpGet(url));
 });
}


var reverse = 1;


function myLevelReverseSort() 
{
  var sortBy = document.getElementById("dropbox1").value;
  var reverseQuery = "";

  if(reverse === 1 ){
    reverseQuery = "-";
  }
  
  reverse = reverse * -1;

  myLevels.$apply(function(){
   url = "http://the-scarlet-life.appspot.com/levels/mylevels?username="+email+"&sort="+ reverseQuery +sortBy;
   myLevels.levels = JSON.parse(httpGet(url));
 });
}


function httpGet(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }