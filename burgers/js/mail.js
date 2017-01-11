var PopupForm = $('.popup-form')

	$(".form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
      PopupForm.bPopup({
        modalColor: "#2f3234",
        opacity: 0.93
      });
			setTimeout(function() {
				
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

  $('.popup-form__btn-close').on('click', function(e) {
    e.preventDefault();
    PopupForm.bPopup().close();
  });