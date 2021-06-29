/* =================================
------------------------------------
	Arcade - Architecture
	Version: 1.0
 ------------------------------------
 ====================================*/



'use strict';

var window_w = $(window).innerWidth();


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(300).fadeOut("slow");

	__portfolio(); // call portfolio function

});
