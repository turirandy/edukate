(function($){
    "use strict"

//Dropdown on mouse hover
    function toggleNavbarMethod(){
        if($(window).width() > 992){
            $('.navbar.dropown').on('mouseover',function(){
                $('.dropdown-toggle',this).trigger('click');
            }).on('mouseout',function(){
                $('.dropdown-toggle',this).trigger('click').blur();

            });
        }else{
            $('.navbar.dropdown').off('mouseover').off('mouseout');
        }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
});

//Back to the top button
$(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('.back-to-top').fadeIn('slow');
        }else{
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},1500,'easeInOutExpo');
        return false;
    });

    //Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay:10,
        time:2000
    });

    //Courses carousel
    $(".courses-carousel").owlCarousel({
        autoplay:true,
        smartSpeed:1500,
        loop:true,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    //Team carousel
    $(".team-carousel").owlCarousel({
        autoplay:true,
        smartSpeed:1000,
        margin:30,
        dots:false,
        loop:true,
        nav:true,
        navText:[
            '<i class="fa-fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-andle-right" aria-hidden="true"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

(jQuery);
// Newsletter form
 const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();

            setTimeout(() => {
                 // Scroll or redirect to top (home)
                window.location.hash = "", // scrolls to top of page
                // Alternatively: window.location.href ="index.html";
                newsletterForm.reset();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 500);
        })};


// Join form
    const joinForm = document.getElementById("joinForm");
    if (joinForm) {
        joinForm.addEventListener("submit", function (event) {
            event.preventDefault(); // prevent default form submission
            // Simulate save
            setTimeout(() => {
                // Scroll or redirect to top (home)
                window.location.hash = "", // scrolls to top of page
                // Alternatively: window.location.href ="index.html";
                 joinForm.reset();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 500);
        });
    }          