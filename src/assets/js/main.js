document.addEventListener("DOMContentLoaded", () => {

    // телефонная маска
    const inputTel = document.querySelectorAll('.feedback_phone')

    if (inputTel) {
        inputTel.forEach(input => {
            Inputmask("+7 (999) 999-99-99", {showMaskOnHover: false}).mask(input);
        })
    }

    // меню в мобильной версии
    const mobileMenu = document.querySelector('.header__hamburger');
    const mobileNav = document.querySelector('.header__nav');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileNav.classList.toggle('header__nav--active');
        });
    }

    const header = document.querySelector('.header');
    const menuItemsWithSubmenu = header.querySelectorAll('.navigation > ul > li.has-children');

    if (menuItemsWithSubmenu) {
        menuItemsWithSubmenu.forEach(item => {
            item.addEventListener('click', (e) => {
                const submenu = item.querySelector('.navigation-submenu__wrapper');
                const withinBoundaries = e.composedPath().includes(submenu);
                if (!withinBoundaries) {
                    item.classList.toggle('has-children--active');
                }
            });

            const listItemsWithSubmenu = item.querySelectorAll('.navigation-submenu > li.has-children');

            if (listItemsWithSubmenu) {
                listItemsWithSubmenu.forEach(elem => {
                    elem.addEventListener('click', () => {
                        elem.classList.toggle('has-children--active');
                    });
                });
            }
        });
    }

    // слайдеры
    var reviewSlider = new Swiper('.reviews__slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 800,
        navigation: {
            nextEl: '.reviews-button-next',
            prevEl: '.reviews-button-prev'
        },
        pagination: {
            el: '.reviews-pagination',
            type: `bullets`,
            clickable: true
        }
    });

    var serviceSlider = new Swiper('.service__slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 800,
        allowTouchMove: false,
        navigation: {
            nextEl: '.service-button-next',
            prevEl: '.service-button-prev',
        },
        pagination: {
            el: '.service-pagination',
            type: "bullets",
            clickable: true
        },
        thumbs: {
            autoScrollOffset: 1,
            swiper: {
                el: '.service__slider--thumbs',
                slidesPerView: 2,
                spaceBetween: 20,
                breakpoints: {
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    }
                }
            }
        }
    });
});

$(document).ready(function() {
    $('.before-after').each(function() {
        $(this).twentytwenty({
            before_label: 'До',
            after_label: 'После'
        });
    });
    $('.before-after--mini').each(function() {
        $(this).twentytwenty({
            default_offset_pct: 0.25
        });
    });
});