var link = document.querySelector(".btn-search-hotel");
var popup = document.querySelector(".search-modal");

link.addEventListener("click", function(event) {
	event.preventDefault();
	if(popup.classList.contains("modal-show")) {		
		popup.classList.remove("modal-show"); 		
	}
	else
		popup.classList.add("modal-show");		
});

window.addEventListener("keydown", function (event) {
  if(event.keyCode === 27) {
    if(popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show"); 
      opened = false;     
    }
  }
});