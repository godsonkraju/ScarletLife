var name;
username = "Guest";
email = "guest@gmail.com"
image = "images/guest.png";
login = 0;

scarletApp.controller('GoogleCtrl', function($scope, $http, $location) {

  // $scope.currentPath = $location.path();
  // console.log("CURRENT PATH: " + $scope.currentPath);

   // Render Login Button When Not Logged In
   $scope.render = function(){
    console.log("RENDERING BUTTON");
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 40,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': onSignIn
      });
  }

  console.log("Detected change from userctrl.");

  $scope.username = username;
  $scope.email = email;
  $scope.image= image;

    // What to do on sign in
    function onSignIn(googleUser) {

      console.log("Detected a login.");
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());


      name = profile.getName();
      image = profile.getImageUrl();
      email = profile.getEmail();
      login = 1;
      console.log("sign in -> login: " + login);


      $scope.username = name;
      $scope.email = email;
      $scope.image= image;

      $scope.$digest();

      // on success redirect to user page
      href = "/usr";
      $location.path(href);

      var user = {
                   "loggedIn": true,
                   "email": email,
                   "username": email
                 };

      $http({
          method: 'POST',
          url: 'http://the-scarlet-life.appspot.com/users',
          data: user,
          headers: {
              'Content-Type': 'application/json'
          }
      }).then(function successCallback(response) {
          // this callback will be called asynchronously when the response is available
          console.log("Post User Login Success");
      }, function errorCallback(response) {
          // called asynchronously if an error occurs or server returns response with an error status.
          console.log("Post User Login Fail.");
      });
    }
    window.onSignIn = onSignIn;

    // What to do on sign out
    $scope.signout = function() {
       console.log("Detected a signout");
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
             // href = "/";
             // $location.path(href);
             // console.log("redirected again");
        });
        username  = "Guest";
        email = "guest@gmail.com";
        image = "images/guest.png";
        console.log("Changed user to guest.");

        $scope.username = username;
        $scope.email = email;
        $scope.image= image;
        login = 0;
        console.log("logout -> login: " + login);


    }
});


// Helper function that assigns urls based on currently 
// loggedin users allowances.
function urlPermission(id) {
  console.log("urlPermission");

    // create page
    if(id === 0 && email!=="guest@gmail.com") {
      //console.log("goto create");
      return "#/create";
    }
    // explore page
    if(id === 1  && email!=="guest@gmail.com") {
      //console.log("goto explore");
      return "#/explore";
    }
    // favorites page
    if(id === 2  && email!=="guest@gmail.com") {
      //console.log("goto favorites");
      return "#/favorites";
    }
    // mylevels page
    if(id === 3  && email!=="guest@gmail.com") {
      //console.log("goto mylevels");
      return "#/myLevels";
    }

    return "#/explore";
}
