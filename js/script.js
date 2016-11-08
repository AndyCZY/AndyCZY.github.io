
(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
    
    /*=============================
            1.WOW js
    ==============================*/
        var wow = new WOW({
			mobile: false
			});
			wow.init();
    

    });
    
    
    jQuery(window).load(function(){
    /*=============================
            2. Preloder
    ==============================*/
        $('#status').fadeOut(); 
        $('#preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
        
    });


}(jQuery));	
