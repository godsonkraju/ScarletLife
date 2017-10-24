
var currentLevel = 0;

// Level select controller
scarletApp.controller('levelSelectController', function($scope, $http, $location) {


  // Load the level previews
  $scope.loading = true;
  $http.get("http://the-scarlet-life.appspot.com/levels?levelType=campaign")
  .then(function(response) {
    $scope.levels = response.data;
  }, function errorCallback(response) {
    ("A problem occurred while trying to get level select.");
  }).finally(function() {
    $scope.loading = false;
  });

  campaign = [];

  if (email !== "guest@gmail.com") {
    var url = "http://the-scarlet-life.appspot.com/user?username=" + email;
    $http.get(url)
    .then(function successCallback(response) {
      campaign = JSON.stringify(response.data.campaign);
      console.log("GET Success");
    }, function errorCallback(response) {
      alert("A problem occurred while trying to load this level.");
    });
  } else {
    console.log("This is a guest...");
    // Leave the first 3 levels unlocked
    campaign = ["f8e8d669-1577-4a0c-9a61-c40105e7b753","d59d0f20-aef2-449a-b334-a9c5b127162c","8f9c99c3-adcf-4870-bae5-ddeee345cd49"];
  }


  // GET level on ng-click
  $scope.playLevel = function(id, $event) {


    console.log("User selected level: " + id);
    
    // needs to be url for all levels, ow returns []
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
        alert("A problem occurred while trying to load this level.");
      });
  }

    // Check if user has beaten this level
    $scope.check = function(id) {
      if (campaign.indexOf(id) !== -1) {
        // Beaten Level
        return 1;
      } else {
        // Have Not Beaten Level
        return 0;
      }
    }

  });