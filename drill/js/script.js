var buyButton = document.querySelectorAll(".buy");
var modalCart = document.querySelector(".modal-cart");
var closeCart = document.querySelector(".modal-cart .modal-close");
var closeBtnWhite = document.querySelector(".modal-cart .btn-white");

for (var i = 0; i < buyButton.length; i++){
  buyButton[i].addEventListener("click", function(event){
    event.preventDefault();
    modalCart.classList.add("modal-content-show");
  });
}

closeCart.addEventListener("click", function(event){
  event.preventDefault();
  modalCart.classList.remove("modal-content-show");
});

closeBtnWhite.addEventListener("click", function(event){
  event.preventDefault();
  modalCart.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode == 27){
    if (modalCart.classList.contains("modal-content-show")){
      modalCart.classList.remove("modal-content-show");
	}
  }
});

var contactButton = document.querySelector(".main-contacts-link");
var modalContacts = document.querySelector(".modal-contacts");
var closeContacts = document.querySelector(".modal-contacts .modal-close");

contactButton.addEventListener("click", function(event){
  event.preventDefault();
  modalContacts.classList.add("modal-content-show");
});

closeContacts.addEventListener("click", function(event){
  event.preventDefault();
  modalContacts.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode == 27){
    if (modalContacts.classList.contains("modal-content-show")){
      modalContacts.classList.remove("modal-content-show");
	}
  }
});

var miniMap = document.querySelector(".mini-map");
var modalMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map .modal-close");

miniMap.addEventListener("click", function(event){
  event.preventDefault();
  modalMap.classList.add("modal-map-show");
});

closeMap.addEventListener("click", function(event){
  event.preventDefault();
  modalMap.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode == 27){
    if (modalMap.classList.contains("modal-map-show")){
      modalMap.classList.remove("modal-map-show");
	}
  }
});
