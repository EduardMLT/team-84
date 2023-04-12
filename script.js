const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },
    loop: true,
    speed: 1000,
    effect: 'flip',
    

});

const gallary = new Swiper('.gallary', {
    navigation: {
        nextEl: '.course-next',
        prevEl: '.course-prev',
    },

    pagination: {
        el: '.gallary-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },
    loop: true,
    speed: 1000,
    // centeredSlides: true,
    

    breakpoints: {
        1200: {
           slidesPerGroup: 1,
           slidesPerView: 2, 
           spaceBetween: 5,
        },
        767: {
           slidesPerGroup: 1,
           slidesPerView: 2, 
           spaceBetween: 20,
        },
        // 320: {
        //    slidesPerGroup: 2, 
        //    slidesPerView: 2, 
        //    spaceBetween: 20,
        // },
        0: {
           slidesPerGroup: 1, 
           slidesPerView: 1, 
           spaceBetween: 20,
        }, 
    },

});