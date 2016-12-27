$(document).ready(function() {

  // fullpage
  $('.maincontent').fullpage ({
    verticalCentered: false,
    anchors: ['1', '2', '3', '4', '5', '6', '7', '8'],
    menu: '.fixed-menu',
    scrollingSpeed: 900
  });

  $('.nav__link, .nav__btn, .arrow-down, .burgers__btn').on('click', function(e) {
    e.preventDefault();

    var href = parseInt($(this).attr('href'));

    $.fn.fullpage.moveTo(href);
  });
});   