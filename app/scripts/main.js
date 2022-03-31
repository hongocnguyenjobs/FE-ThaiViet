"use strict";
import resize from './resize.js';

/* Bootstrap modal */
$('.jsCallModalPdf').click(function() {
    $('.jsModalPdf').modal('show');
});

$('.jsCallModalLogin').click(function() {
    $('.jsModalLogin').modal('show');
});

/* Owlcarousel2 news slide */
// $(".jsNewsOwlCarousel").owlCarousel({
//     loop: false,
//     autoplay: true,
//     margin: 40,
//     responsive: {
//         0: {
//             items: 1
//         },
//         576: {
//             items: 2
//         },
//         992: {
//             items: 3
//         }
//     },
//     nav: true,
//     navText: ['<img src="images/ic_trending_flat_white_24px.svg" alt="">', '<img src="images/ic_trending_flat_white_24px.svg" alt="">']
// });
// (() => {
//     $(".jsMainOwlCarousel .item").height($(".jsMainOwlCarousel .item").width() * 5 / 8);
//     let timer;
//     $(window).resize(function () {
//         clearTimeout(timer);
//         timer = setTimeout(function () {
//             $(".jsMainOwlCarousel .item").height($(".jsMainOwlCarousel .item").width() * 5 / 8);
//         }, 300);
//     });
// })()

/* Owlcarousel2 - partner - slide */
$(".jsPartnerOwlCarousel").owlCarousel({
    loop: false,
    autoplay: true,
    margin: 32,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        }
    },
    nav: true,
    navText: ['<img src="images/ic_keyboard_arrow_left_black_24px.svg" alt="">', '<img src="images/ic_keyboard_arrow_left_black_24px.svg" alt="">']
});

/* Owlcarousel2 - product list - slide */
$("#productOne").owlCarousel({
    loop: false,
    autoplay: true,
    margin: 38,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    },
    nav: true,
    // navText: ['<img src="images/ic_keyboard_arrow_left_black_24px.svg" alt="">', '<img src="images/ic_keyboard_arrow_left_black_24px.svg" alt="">']
});

/* Owlcarousel2 - product new - slide */
// $("#productNew").owlCarousel({
//     loop: false,
//     autoplay: true,
//     margin: 20,
//     responsive: {
//         0: {
//             items: 2
//         },
//         576: {
//             items: 4
//         }
//     },
// });