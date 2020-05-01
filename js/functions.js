
jQuery(window).on('load', function() {
	jQuery("#status").fadeOut();
	jQuery("#preloader").delay(350).fadeOut("slow");
});

$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});

