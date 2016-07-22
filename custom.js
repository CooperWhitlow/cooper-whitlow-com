var username = "raincitycode";
var hostname = "gmail.com";
var email = username + "@" + hostname ;
var linktext = "<a class='bold' href='" + "mail" + "to:" + username + "@" + hostname + "'>" + email + "</a>";
var workState = "collapsed";
var projectState = "collapsed";

//jQuery Magic
$( document ).ready(function() {

  $('#workDetails, #projectDetails, .closeButton').hide();
  $('#workDetails').append("<p>" + linktext + "</p>");

  $('#work').click(function() {
    if (workState === "collapsed") {
      $('#projects').hide();
      $('#work').addClass("expandedDimension", 300, function() {
       $('#work').addClass("blur", 0);
       $('#work>.closeButton, #workDetails').show();
      });
      $('footer').addClass("expandedPosition", 300);
      workState = "expanded";
    } else {
        $('#work').removeClass("blur", 0);
        $('footer').removeClass("expandedPosition", 300);
        $('#work').removeClass("expandedDimension", 0).promise().done(function(){
          $('#projects').fadeIn(400)
        });
        $('footer').css("margin-top", "340px")
        $('.closeButton, #workDetails').hide();
        workState = "collapsed";
      }
  });

  $('#projects').click(function() {
    if (projectState === "collapsed") {
      $('#work').hide();
      $('#projects').addClass("expandedDimension", 300, function() {
        $('#projects').addClass("blur", 0);
        $('#projects>.closeButton, #projectDetails').show();
      });
      $('footer').addClass("expandedPosition", 300);
      projectState = "expanded";
    } else {
        $('#projects').removeClass("blur", 0);
        $('#projects').removeClass("expandedDimension", 0).promise().done(function(){
          $('#work').fadeIn(400)
        });
        $('footer').removeClass("expandedPosition", 300);
        $('.closeButton, #projectDetails').hide();
        projectState = "collapsed";
      }
  });

});
