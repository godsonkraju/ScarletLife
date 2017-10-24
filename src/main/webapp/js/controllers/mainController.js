// MAIN CONTROLLER and inject Angular's $scope
scarletApp.controller('mainController', function($scope, $location) {

  $scope.currentPath = $location.path();
  console.log("currentPath: " + $scope.currentPath);
	console.log("MAIN CONTROLLER");
  // create a message to display in our view
  setTimeout(
    function()
    {
       loadStuff(); // init jQuery again
    }, 500);

});

// ABOUT CONTROLLER
scarletApp.controller('aboutController', function($scope) {
	console.log("ABOUT CONTROLLER");

});

// HELP CONTROLLER
scarletApp.controller('helpController', function($scope) {
	console.log("HELP CONTROLLER");

});

// TERMS CONTROLLER
scarletApp.controller('termsController', function($scope) {
	console.log("TERMS CONTROLLER");

});

// PLAY CONTROLLER
scarletApp.controller('playController', function($scope){
  console.log("PLAY CONTROLLER");
  // set navigate away function
  $scope.$on('$locationChangeStart', function (event, next, prev) {
    console.log("game no longer in focus");
    pauseGameOfLifeDev();
    enableScroll();
  });
  setTimeout(
    function()
    {
       loadStuff(); // init jQuery again
       initGameOfLifeDev(); // start the Game
    }, 500);
});

// BUILD CONTROLLER
scarletApp.controller('buildController', function($scope){
  console.log("BUILD CONTROLLER");
  //hack
  setTimeout(
    function()
    {
       loadStuff(); // init jQuery again
       initGameOfLife(); // start the Game
    }, 500);
});