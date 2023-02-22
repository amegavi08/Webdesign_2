;
(function ($) {
    "use strict";
    jQuery(document).ready(function () {

        // == AOS Init== //
        AOS.init({
            disable: 'mobile'
        });

        
            /* Swiper for projects */
    if ($('.clients-slider').length) {
        var swiper = new Swiper('.clients-slider',{
            autoplay:{
                delay: 2000,
                disableOnInteraction: true,
            },
            speed: 400,
            loop: true,
            slidesPerView: 3,
            breakpoints: {
                992: {
                    slidesPerView: 3
                },
                
                576: {
                    slidesPerView: 2
                },
                
                400:{
                    slidesPerView: 1
                }
            }
        });
        
            $(".clients-slider").hover(function () {
                (this).swiper.autoplay.stop();
            }, function () {
                (this).swiper.autoplay.start();
            });
        
    }
        /*Clients flipping codes */
        var cardSlider = new Swiper('.card-slider',{
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            loop: true,
            speed: 400,
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                
                992: {
                    slidesPerView: 2
                },
                
                768: {
                    slidesPerView: 1
                }
            }
        });
     
        
            /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });
        

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});
        
        

    });

    
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});
    
})(jQuery)