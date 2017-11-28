$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $(".clickable2").click(function() {
    $(".up").fadeToggle();
  });

  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
   });

  $(".clickable3").click(function() {
    $("h2").removeClass();
    $("h2").addClass("box");
  });
});
