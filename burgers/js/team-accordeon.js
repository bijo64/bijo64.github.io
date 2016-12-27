$(document).ready(function() {
	$(".team__about").hide().prev().click(function() {
	    $(this).parents(".team__acco").find(".team__about").slideUp().prev().removeClass("active");
	    $(this).next(":hidden").slideDown().prev().addClass("active");
	  });
});