// create the termsController
scarletApp.controller('contactController', function($scope, $http) {
  console.log("CONTACT CONTROLLER!");

  // Fill the data
  $http.get("data/reviews.json")
  .then(function(response) {
    $scope.reviews = response.data.reviews;
  });


  // Post comment to google form
  $scope.submitComment = function() {

      // Gather the input data to post contact to google
      var name = $('#name-textarea').val(); 
      if(name === "") {
        name =  $('#name-textarea-small').val(); 
      }
      var comment = $('#comment-textarea').val(); 
      if(comment === "") {
        comment =  $('#comment-textarea-small').val(); 
      }
      var subject = $('#subject-textarea').val(); 
      if(subject === "") {
        subject =  $('#subject-textarea-small').val(); 
      }

       // default rating
       rating = -1;

       // 1 star
       if (document.getElementById('test1').checked) {
        rating = document.getElementById('test1').value;
      }
      // 1 star
       if (document.getElementById('test1-small').checked) {
        rating = document.getElementById('test1-small').value;
      }
       // 2 star
       if (document.getElementById('test2').checked) {
        rating = document.getElementById('test2').value;
      }
      // 2 star
       if (document.getElementById('test2-small').checked) {
        rating = document.getElementById('test2-small').value;
      }
       // 3 star
       if (document.getElementById('test3').checked) {
        rating = document.getElementById('test3').value;
      }
      // 1 star
       if (document.getElementById('test3-small').checked) {
        rating = document.getElementById('test3-small').value;
      }
       // 4 star
       if (document.getElementById('test4').checked) {
        rating = document.getElementById('test4').value;
      }
      // 1 star
      if (document.getElementById('test4-small').checked) {
        rating = document.getElementById('test4-small').value;
      }
       // 5 star
       if (document.getElementById('test5').checked) {
        rating = document.getElementById('test5').value;
      }
             // 5 star
       if (document.getElementById('test5-small').checked) {
        rating = document.getElementById('test5-small').value;
      }

      // sanity check
      console.log("NAME: " + name + ", COMMENT: " + comment + ", RATING: " + rating + ", SUBJECT: " + subject + ", EMAIL: " + email);  

      // POST to google form
      console.log("Posting comment");
      $.ajax({ 
        url:   "https://docs.google.com/forms/d/e/1FAIpQLSddc7Ah0koGxUYXHc7ottnMcXeVycgc45kmufOn97vNyaBdbw/formResponse",                
        data: {"entry.1098597413" : name, "entry.255046954" : comment, "entry.1856604072" : rating, "entry.140241232" : subject, "entry.1944824932" : email},             
        type: "POST",          
        dataType: "xml",               
        statusCode: {                    
          0: function (){console.log("0 feedback");},                  
          200: function (){console.log("200 feedback");}               
        }          
      });      

    // }

    // Produce the toast
    Materialize.toast('Comment Submitted', 4000,'',function(){console.log('Your toast was dismissed')});
    // clear the large textfields
    $('#subject-textarea').val('');
    $('#comment-textarea').val('');
    $('#name-textarea').val('');
    // clear the small textfields (different)
    $('#subject-textarea-small').val('');
    $('#comment-textarea-small').val('');
    $('#name-textarea-small').val('');
    // update Text Fields
    Materialize.updateTextFields();
  }

  // create a message to display in our view
  setTimeout(
    function()
    {
       loadStuff(); // init jQuery again
     }, 500);

});