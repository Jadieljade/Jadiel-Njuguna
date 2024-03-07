$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function () {
    // typing animation
    (function ($) {
      $.fn.writeText = function (content) {
        var contentArray = content.split(""),
          current = 0,
          elem = this;
        setInterval(function () {
          if (current < contentArray.length) {
            elem.text(elem.text() + contentArray[current++]);
          }
        }, 80);
      };
    })(jQuery);
  
    // input text for typing animation
    $("#holder").writeText("Hello, and welcome to my corner of the internet!")});

    
  document.addEventListener("DOMContentLoaded", function() {
    // Get all skill bars
    var skillBars = document.querySelectorAll(".skillbar-bar");

    // Loop through each skill bar
    skillBars.forEach(function(bar) {
      // Get the percentage from the data-percent attribute
      var percent = parseInt(bar.parentNode.getAttribute("data-percent"));

      // Set the width of the bar to the percentage
      bar.style.width = percent + "%";
    });
  });