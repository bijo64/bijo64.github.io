var contacts = document.querySelector(".map-contacts");
var btn = contacts.querySelector(".btn");
var feedbackForm = document.querySelector(".feedback-form");
var closeForm = document.querySelector(".feedback-form-close");
var name = feedbackForm.querySelector("[name=name]");
var overlay = document.querySelector(".overlay");
var slideFirst = document.querySelector("#slideFirst");
var slideSecond = document.querySelector("#slideSecond");
var slideThree = document.querySelector("#slideThree");

btn.addEventListener("click", function(event){
  event.preventDefault();
  feedbackForm.classList.add("feedback-form-show");
  overlay.classList.add("overlay-show");
  name.focus();
});

closeForm.addEventListener("click", function(event){
  event.preventDefault();
  feedbackForm.classList.remove("feedback-form-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (feedbackForm.classList.contains("feedback-form-show")) {
      feedbackForm.classList.remove("feedback-form-show");
      overlay.classList.remove("overlay-show");
    }
  }
});

//slider

slideFirst.onclick = function() {
  document.body.style.backgroundColor="#849d8f";
};

slideSecond.onclick = function() {
  document.body.style.backgroundColor="#8996a6";
};

slideThree.onclick = function() {
  document.body.style.backgroundColor="#9d8b84";
};

//map

function initialize() {
  var mapOptions = {
    scrollwheel: false,
    zoom: 17,
    center: new google.maps.LatLng(59.9389678,30.327000)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  var image = 'img/marker.png';
  var myLatLng = new google.maps.LatLng(59.9387100,30.323800);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
