// Initialize Swiper sliders
document.addEventListener('DOMContentLoaded', function() {
    // Featured Products Slider
    new Swiper('.featured-products .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            }
        }
    });

    // Non-Veg Pickles Slider
    new Swiper('.non-veg-section .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            }
        }
    });

    // Veg Pickles Slider
    new Swiper('.veg-section .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            }
        }
    });

    // Powders Slider
    new Swiper('.powders-section .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            }
        }
    });

    // Instagram Slider
    new Swiper('.instagram-slider', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 6,
            }
        }
    });
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.m-menu-btn');
    const menuSide = document.querySelector('.m-menu-side');
    const closeBtn = document.querySelector('.side-close-icon');

    if (menuBtn && menuSide && closeBtn) {
        menuBtn.addEventListener('click', function() {
            menuSide.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', function() {
            menuSide.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Search Toggle
    const searchBtn = document.querySelector('.search-block-mobile button');
    const searchWrapper = document.querySelector('.search-wrapper');
    const searchCloseBtn = document.querySelector('.search-wrapper .close');
    const clearSearchBtn = document.querySelector('.clear_search');
    const searchField = document.querySelector('.search-field');

    if (searchBtn && searchWrapper && searchCloseBtn) {
        searchBtn.addEventListener('click', function() {
            searchWrapper.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        searchCloseBtn.addEventListener('click', function() {
            searchWrapper.classList.remove('active');
            document.body.style.overflow = '';
        });

        if (clearSearchBtn && searchField) {
            clearSearchBtn.addEventListener('click', function() {
                searchField.value = '';
                searchField.focus();
            });
        }
    }

    // Cart Toggle
    const cartBtn = document.querySelector('.cart-contents');
    const cartSide = document.querySelector('#cart-side');
    const cartCloseBtn = document.querySelector('#cart-side .close');

    if (cartBtn && cartSide && cartCloseBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            cartSide.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        cartCloseBtn.addEventListener('click', function() {
            cartSide.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Login Modal
    const loginBtn = document.querySelector('.et-menu-account-btn');
    const loginModal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal .close');

    if (loginBtn && loginModal && modalCloseBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        modalCloseBtn.addEventListener('click', function() {
            loginModal.style.display = 'none';
            document.body.style.overflow = '';
        });

        window.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // Language and Currency Tabs
    const tabLinks = document.querySelectorAll('.tabs li a');
    const tabPanels = document.querySelectorAll('.rt-tab-panel');

    if (tabLinks.length > 0 && tabPanels.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links and panels
                tabLinks.forEach(l => l.parentElement.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('opened'));
                
                // Add active class to clicked link
                this.parentElement.classList.add('active');
                
                // Show corresponding panel
                const targetPanel = document.querySelector(this.getAttribute('href'));
                if (targetPanel) {
                    targetPanel.classList.add('opened');
                }
            });
        });

        // Activate first tab by default
        if (tabLinks[0] && tabPanels[0]) {
            tabLinks[0].parentElement.classList.add('active');
            tabPanels[0].classList.add('opened');
        }
    }
});
