/*=========================================

Template Name: Doffodil - One Page Personal Portfolio Template
Author: ThemeLabBD
Version: 1.0
Design and Developed by: ThemeLabBD

NOTE: This is the custom jQuery file for the template

=========================================*/


/*******************************************
        {  Table of contents  }
********************************************

1. NiceScroll
2. sticky menu
3. jquery smooth scroll
4. jquery scroll spy
5. Bootstrap menu fix
6. background-image flickering solution for mobile
7. Magnific popup

********************************************
        {  End table content }
********************************************/


(function ($) {
	"use strict";
    
    jQuery(document).ready(function($){
        
        
         /*=============================
                NiceScroll
        ==============================*/
          $("html").niceScroll({
            scrollspeed: 80,
            mousescrollstep: 40,
            cursorwidth: 7,
            cursorborder: 0,
            cursorcolor: '#44B272',
            autohidemode: true,
            zindex: 999999999,
            horizrailenabled: false,
            cursorborderradius: 0 
          });
        
        
        
        /*=============================
            sticky menu
        ===============================*/
        var nav = $('.header-area');
        var banner = $('.welcome-text');
        var pos = nav.position();

        $(window).scroll(function() {

            var windowpos = $(window).scrollTop();

            if (windowpos>=banner.outerHeight()) {
                nav.addClass('fixedTop');
            }

            else {
                nav.removeClass('fixedTop');
            }

        });


  
        
    /*================================
        jquery smooth scroll
    ==================================*/
        $("li.smooth-scroll a, .wlcome-btn a.smooth-scroll, .logo a").on('click', function(event){
    
            var $anchor = $(this);
            var headerH = '65';
            $("html,body").stop().animate({
                scrollTop : $($anchor.attr("href")).offset().top - headerH + "px"
            },1200, 'easeInOutExpo');
            
            event.preventDefault();
            
            });
        
        
        
    /*======================================
        jquery scroll spy
    ========================================*/
        $("body").scrollspy({
        
            target : ".navbar-collapse",
            offset : 95
        
        });
        
        
     /*=================================
            Bootstrap menu fix
     ==================================*/
        $(".navbar-toggle").on("click", function(){
        
            $("body").addClass("mobile-menu-activated");
        
        });
        
        $("ul.nav.navbar-nav li a").on("click", function(){
        
            $(".navbar-collapse").removeClass("in");
        
        });
        
        
        /*====================================================
            background-image flickering solution for mobile
            =======================================================*/
             var bg = jQuery("#intro-bg");
            function resizeBackground() {
                bg.height(jQuery(window).height() + 60);
            }
            resizeBackground();
        
        
        
       
       /*==================================
                Magnific popup
        =================================*/
        $(".preview").magnificPopup({
          type: 'image',
            gallery:{
                enabled:true
            }
            
        });
        
     
   
        
    });
    
    



}(jQuery));	