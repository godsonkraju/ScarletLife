// Level Form Controller
scarletApp.controller('levelFormCtrl', function($scope, $http) {

    // create a message to display in our view


  console.log("LEVEL FORMS CONTROLLER");
  setTimeout(
    function()
    {
       loadStuff(); // init jQuery again
       initGameOfLife(); // start the Game
    }, 500);


  // Give an href based on loggedin user
  $scope.getUrl = function(id){
    return urlPermission(id);
  }

    var url = "http://the-scarlet-life.appspot.com/levels/mylevels?username="+email;
    $http.get(url)
    .then(function(response) {
      $scope.nextLevels = response.data;
      console.log("nextLevelfunction....");

    setTimeout(
    function()
    {
       loadStuff(); // init jQuery again
    }, 500);
    });


  // POST on form submission click
  $scope.postLevel = function() {
    // Make level obj
      var levelObject;
      try {
          levelObject = makeLevelObject();
      }
      catch(err) {
          var $toastContent = $('<span>Fill in the level details!</span>');
          Materialize.toast($toastContent, 5000);
          // end function
          renderCells();
          return;
      }

    if(login === 1) {
      console.log("SETTING USER: " + email);
      levelObject.creator = email;
    } else {
      console.log("SETTING USER: " + name);
      levelObject.creator = name;
    }

    // reformat the level object to JSON
    var level = JSON.stringify(levelObject);

    if(levelId === null){
      // level is null if the level does not pass the feature test
      if(level !== "null") {
          // Simple POST request
          $http({
              method: 'POST',
              url: 'http://the-scarlet-life.appspot.com/levels',
              data: level,
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(function successCallback(response) {
              
              console.log("Post Success");

              // TOAST to notify user of successß
              var $toastContent = $('<span>Level Submitted</span>');
              Materialize.toast($toastContent, 5000);

              // Clear the form
              clearLevelBuildForm();

          }, function errorCallback(response) {
              console.log("Post fail.");
              console.log("There was a problem creating your level.");
          });
        }
      } else {
        // Simple PUT request
        var url = "http://the-scarlet-life.appspot.com/levels/" + levelId;
        $http({
            method: 'PUT',
            url: url,
            data: level,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function successCallback(response) {
            
            console.log("Put Success");

            // TOAST to notify user of success
            var $toastContent = $('<span>Level Updated</span>');
            Materialize.toast($toastContent, 5000);

            // Clear the form
            clearLevelBuildForm();
            
        }, function errorCallback(response) {
            console.log("There was a problem updating your level.");
        });
      }

      // re-render cells for grid stiff
      renderCells();
  }


});
