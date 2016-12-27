$(document).ready(function() {  
  var Popup = $('.popup-comments')

    $('.comments__btn').on('click', function(e) {
      e.preventDefault();
      Popup.bPopup ({
        modalColor: "#2f3234",
        opacity: 0.93,
        speed: 500,
        transition: "slideIn",
        transitionClose: "slideBack"
      });
    });

    $('.popup-comments__btn-close').on('click', function(e) {
      e.preventDefault();
      Popup.bPopup({
        speed: 500,
        transitionClose: "slideBack"
      }).close();
    });
});    