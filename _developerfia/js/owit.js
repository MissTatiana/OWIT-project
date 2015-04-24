/**
 * Javascript actions, methods, and functions
 *
 * @package owit
 * @version 1.0
 */
jQuery(document).ready(function($){
	"use strict";

	/**
	 * Initialize WOW Js
	 */
	new WOW().init();
	
	/**
	 * Mobile Menu Toggle function
	 */
	$('.menu-toggler').click(function(e){
		e.preventDefault();
		var $menu = $('ul.menu-ul', $(this).parent().parent());
		
		$menu.toggle();
		
		return;
	});


	/**
	 * Menu Toggle
	 * Fade-in/out
	 */
	$('.main-menu-toggler').click(function(e){
		e.preventDefault();
		$('.owit-menu .menu-ul').fadeToggle();
	});

	/**
	 * Sub Menu Toggle
	 */
	$('.toggle').click(function(e){
		e.preventDefault();

		$('>ul.sub-menu', $(this).parent().parent()).slideToggle();
	});
	
	/**
	 * jQuery Custom Select
	 */
	$('select.owit-select').customSelect();

	/**
	 * Wait for resize end before re-initialising
	 * the customSelect plugin to avoid
	 * browser lag and heavy memory consumption
	 * 
	 */
	function resizeCallBack(){
		$('select.owit-select').customSelect();
	}

	var begin;
	window.onresize = function(){
	  clearTimeout(begin);
	  begin = setTimeout(resizeCallBack, 100);
	};

	 /**
	  * Add 'msie' class to body for ie browsers
	  */
	 var ua = window.navigator.userAgent;
	    var msie = ua.indexOf("MSIE ");
	 
	 if (msie > 0) {
	  $('body').addClass('msie');
	 }
});