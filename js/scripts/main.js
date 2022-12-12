/*=== full banner ===*/
var swiper = new Swiper(".full-banner", {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
    },
});

/*=== rulers ===*/
var swiper = new Swiper(".rulers", {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 16,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
            
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
    },
});

/*=== partner brands ===*/
var swiper = new Swiper(".partner-brands", {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 16,
            loop: true,

        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
            
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
    },
});


/*=== showcase ===*/
var swiper = new Swiper(".showcase", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 16,
            loop: true,

        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            navigation: false,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
            
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
            
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
            
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
    },
});

/*=== others ===*/
$(document).ready(function() {
    /*=== modal ===*/
    const btnModal = $('.js-open-modal');
    const btnCloseModal = $('.js-close-modal');
    const modal = $('#js-modal');
    const overlay = $('.overlay');

    setTimeout(() => { 
        modal.addClass('active');
    }, 1000);

    $('.close-modal').click(function() {
        $(modal).removeClass('active');
    })

    $(overlay).click(function() {
        $(modal).removeClass('active');
    })
    /*=== End modal ===*/

    /*=== accordion mobile ===*/
    $('.footer-content .titles').click(function () {
        $(this).siblings().toggleClass('expanded', 1000)
    });
    /*=== End accordion mobile ===*/


    /*=== quando for menor que 480, esconder arrows da vitrine ===*/
        if( $(window).width() <= 480){
            $('.showcase .swiper-button-next').css('display','none')
            $('.showcase .swiper-button-prev').css('display','none')
        }
});