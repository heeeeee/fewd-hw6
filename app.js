//Your code here
$(document).ready(function() {
	// body message fades in
	$("body").fadeIn(5000);

	// highlighted paragraph changes to yellow
	$("p").mouseenter(function(){
		$(this).css("background-color", "yellow");
	});

	$("p").mouseleave(function(){
		$(this).css("background-color", "white");
	});

	// change the style of h2
	$("h2").on("click", function(){
		$(this).animate({
			"opacity": ".25",
			"margin-left": "20px"
		} , 4000, function(){
			//after it's complete
			$(this).css("opacity", ".5");
		});
	});

	// challenge - style switcher
	$("#switcher-large").on("click", function(){
		$("body").css("font-size", "+=5px");
	});

	$("#switcher-small").on("click", function(){
		$("body").css("font-size", "-=5px");
	});

	$("#switcher-default").on("click", function(){
		$("body").css("font-size", "62%");
	});

	// bonus
	$(document).keydown(function(e) {
		switch(e.which) {
        	case 37: // left
        		$("#switcher").css("margin-left", "-=20px");
        	break;

        	case 38: // up
	        	$("#switcher").css("margin-top", "-=20px");
        	break;

        	case 39: // right
        		$("#switcher").css("margin-left", "+=20px");
        	break;

        	case 40: // down
        		$("#switcher").css("margin-top", "+=20px");
        	break;

        	default: return; // exit this handler for other keys
    	}
    	e.preventDefault(); // prevent the default action (scroll / move caret)

	});
});
