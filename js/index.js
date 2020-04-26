jQuery(document).ready(function ($) {
    $('.section__section__three__title__item__img').owlCarousel({
        items: 3,
        center: true,
        margin: 10,
        responsive : {
            1200 : {
                nav: true,
                navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            },
            1000 : {
                nav : false,
                navText : false,
            }
         },
        loop: true,        
    })
})
jQuery(document).ready(function ($) {
    $('.section__five__right__img').owlCarousel({
        items: 1,
        center: true,
        loop: true,
        margin: 10,
    })
})