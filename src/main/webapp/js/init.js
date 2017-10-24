

// Initalize everything for materializeCSS
function loadStuff() {
  console.log("Reinitializing materialize css.");

  // BuySellAds Detection
  var $scarletAds = $("#scarletAds");
  function createAd() {
      console.log("adding image");
      $(".adImage").remove();
      // select random ad from life ads
      var image;
      // pick and ad from 0 to 7
      var imgToChoose = Math.floor(Math.random() * 9);
      if(imgToChoose === 0){
        // canary life
        image = $('<a href="https://canary-life.firebaseapp.com/" target="_blank"><img class="adImage" src="images/08-sl2-512-512.png" /></a>');
      } else if (imgToChoose === 1){
        // firebrick life
        image = $('<a href="http://fire-brick-life.appspot.com/" target="_blank"><img class="adImage" src="images/firebrick512x512.png" /></a>');
      } else if (imgToChoose === 2){
        // IKB life
        image = $('<a href="https://ikb-life.firebaseapp.com/" target="_blank"><img class="adImage" src="images/ad512x512.png" /></a>');
      } else if (imgToChoose === 3){
        // salmon life
        image = $('<a href="https://salmon-life.firebaseapp.com/" target="_blank"><img class="adImage" src="images/SalmonLifeLogo.png" /></a>');
      } else if (imgToChoose === 4){
        // purple life
        image = $('<a href="https://purplelifegame.firebaseapp.com/" target="_blank"><img class="adImage" src="images/sca_ad.png" /></a>');
      } else if (imgToChoose === 5){
        // awesome life
        image = $('<a href="https://www.awesome-life-game.appspot.com" target="_blank"><img class="adImage" src="images/awesomescarlet.png" /></a>');
      } else if (imgToChoose === 6){
        // timberwolf life
        image = $('<a href="https://timberwolf-life.firebaseapp.com/" target="_blank"><img class="adImage" src="images/ScL.png" /></a>');
      } else if (imgToChoose === 7){
        // wisteria life
        image = $('<a href="https://wisteria-life.appspot.com/" target="_blank_blank"><img class="adImage" src="images/WL-Scarlet.png" /></a>');
      } else if (imgToChoose === 8){
        // jet life
        image = $('<a href="https://jet-life.firebaseapp.com/" target="_blank"><img class="adImage" src="" alt="Jet Life" /></a>');
      }
      $scarletAds.append(image);
  }
  createAd();

  // BuySellAds Demos close button.
  $('#scarletAds .close').on('click', function() {
    $(this).parent().remove();
  });

  // Allow for collapsable buttons
  $('.button-collapse').sideNav({
    // edge: 'right',
  });

  $('#lives-nav').sideNav({
    edge: 'right',
  });

  // Allow for dropdown menu
  $('.dropdown-button').dropdown();

  // Allow for collapsable element
  $('.collapsible').collapsible();

  // Allow for tabs
  $('ul.tabs').tabs();

  // Allow for selection of combobox
  $('select').material_select();

  // Update forms
  $(document).ready(function() {
    Materialize.updateTextFields();
  });

    // tooltips
    // delete past tooltips
    $('.material-tooltip').remove();
    // set tooltips again for all visible tooltipped stuff
    $('.tooltipped').tooltip();
}

