
var btn = document.querySelector(".map .btn");
var form = document.querySelector(".map .feedback-form");
var close = document.querySelector(".feedback-form-close");
var closebtn = form.querySelector(".feedback-form .btn-gray");
var name = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");
var text = form.querySelector("[name=text]");
var storage1 = localStorage.getItem("name");
var storage2 = localStorage.getItem("email");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.add("feedback-form-show");

  if (storage1) {
    name.value = storage1;
  }

  if (storage2) {
    email.value = storage2;
  }  
});

close.addEventListener("click", function() {
  form.classList.remove("feedback-form-show");
  form.classList.remove("form-error");  
});

closebtn.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.remove("feedback-form-show");
  form.classList.remove("form-error");  
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (form.classList.contains("feedback-form-show")) {
      form.classList.remove("feedback-form-show");
      form.classList.remove("form-error");
    }
  }
});

form.addEventListener("submit", function(event) {
  if (!name.value || !email.value || !text.value) {
    event.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
  }
});



function initialize() {
  var mapOptions = {
    scrollwheel: false,
    zoom: 17,
    center: new google.maps.LatLng(59.9389678,30.320000)
  }
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