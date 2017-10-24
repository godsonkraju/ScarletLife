// DENOTES MODAL TYPE:
// POSSIBLE VALUES: start, paused, failed, beaten
var modalType = "start";

// Play Game Modal
function initGamePlayModal() {
  // open it up
  $('#overlay-modal').openModal({
    dismissible : false,           // Modal cannot be dismissed by clicking outside of the modal
    opacity     : 0.7,             // Opacity of modal background
    in_duration : 300,             // Transition in duration
    out_duration: 200,             // Transition out duration
    starting_top: '4%',            // Starting top style attribute
    ending_top  : '10%',           // Ending top style attribute
    ready       : function() { console.log("Modal Ready!"); },  // if you want something specific to happen when it opens, do it here
    complete    : function() { console.log("Modal Closed!"); }  // if you want something specific to happen when it closes, do it here
  });

}

// MODAL OVERLAY CONTROLLER
scarletApp.controller('overlayCtrl', function($scope, $http) {
  scope = angular.element($("#overlay-modal")).scope();
    window.onhashchange = function(event) {
        console.log("game no longer in focus");
        pauseGameOfLifeDev();
        enableScroll();
        $('.lean-overlay').remove();
        modalType = null;
    }
  // set the level
  level = currentLevel;
  console.log("initial : " + modalType);

  // watching the external variable modalType
  $scope.watchModalType = function(){
      console.log("type change detected: " + modalType);
      return modalType;
  }

  // scope variable representations of modal change functions
  $scope.watchModalTypeVar = modalType;

  $scope.$watch('watchModalTypeVar', function(newValue, oldValue){
      level = currentLevel;
      console.log("resetting values: " + $scope.watchModalTypeVar);
        // determine the modal type
      if($scope.watchModalTypeVar === "start"){ // modal is for at the start of a level
          $scope.title = level.title;
          $scope.message = level.description;
          $scope.yeahText = "Start";
      } else if ($scope.watchModalTypeVar === "paused"){ // modal is for a paused game
          $scope.title = "Paused!";
          $scope.message = "Funny thing, being suspended in space-time, keep playing?";
          $scope.yeahText = "Resume";
      } else if ($scope.watchModalTypeVar === "failed"){ // modal is for a failed level
          $scope.title = "Failed :(";
          $scope.message = "You fail by running out of fuel or running out of health! Try Again?";
          $scope.yeahText = "Replay";
      } else if ($scope.watchModalTypeVar === "beaten"){
          
          // Does the level have a next level?
           $scope.title = "You Won!";

          // If this is a campaign level, record beaten level
           if(level.levelType === "campaign" && email!=="guest@gmail.com") {
            console.log("This is a campaign level.");
            // Tell the backend that the user beat this level
            var url = "http://the-scarlet-life.appspot.com/users/addToCampaign/"+ email + "/" + level.levelId;
            $http.get(url)
            .then(function successCallback(response) {
              }, function errorCallback(response) {
                alert("A problem occurred while trying to load this level.kjljlkjlkj");
              });
           } else {
            console.log("This is not a campaign level or this is a guest.");
           }


          // Add message to modal
          console.log(level.nextLevel);
          if(level.nextLevel === "None"){
              $scope.yeahText = "Replay";
              $scope.message =  "You Beat All The Levels! Play This Level Again?";
          } else {
              $scope.yeahText = "Next";
              $scope.message = "You Beat The Level! Play Next?";
          }
      }
  });

  $scope.yeahButton = function(){
    console.log("YEAH BUTTON PRESSED : " + modalType);
    if(modalType === "start"){ // modal is for at the start of a level
      startGameOfLifeDev();
    } else if (modalType === "paused" || modalType == ""){ // modal is for a paused game
      startGameOfLifeDev();
    } else if (modalType === "failed"){ // modal is for a failed level
      $scope.watchModalTypeVar = 'start';
      initGameOfLifeDev();
    } else if (modalType === "beaten"){
      // does the level have a next level?
        if(level.nextLevel === "None"){
            $scope.watchModalTypeVar = 'start';
            initGameOfLifeDev();
        } else {
            $scope.getLevel(nextLevelDev);
        }
    }
  }
  
  $scope.nahButton = function(){
    console.log("NAH BUTTON PRESSED");
    if(modalType === "start"){ // modal is for at the start of a level
      
    } else if (modalType === "paused"){ // modal is for a paused game
      
    } else if (modalType === "failed"){ // modal is for a failed level
      
    } else if (modalType === "beaten"){
      
    }
    // for now, no matter what, go back
    modalType = "start";
    $scope.watchModalTypeVar = 'start';
    enableScroll();
      modalType = null;
    window.history.back();
  }

  // PLAY LEVEL
  $scope.getLevel = function(id){
      console.log("ID RECIEVED: " + id);
      var url = "http://the-scarlet-life.appspot.com/levels/" + id;
      $http.get(url)
      .then(function successCallback(response) {
          // log successful request
          console.log("GET Success");
          var level = JSON.stringify(response.data);
          // Play the loaded level
          playSelectedLevel(level);
          currentLevel = JSON.parse(level);
          console.log("resetting modaltypevar to start");
          // change info of overlay to start of next level
          $scope.watchModalTypeVar = 'start';
          //scope = angular.element($("#overlay-modal")).scope();
        }, function errorCallback(response) {
          // called asynchronously if an error occurs or server returns response with an error status.
          alert("A problem occurred while trying to load this level.");
        });
    }
});
