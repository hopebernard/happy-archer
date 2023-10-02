"use strict"

const button = document.querySelector('.phones-header__arrow');
const phones = document.querySelector('.phones-header__list');
const area = document.querySelector('.wrapper');

button.addEventListener('click', function() {
    phones.classList.toggle('_open');
    button.classList.toggle('_active');
})

if (phones.classList.contains('_open')) {
    area.addEventListener('click', function() {
        phones.classList.remove('_open');
        button.classList.remove('_active');
})}



document.addEventListener('click', documentActions);


function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        const catalogMenu = document.querySelector('.sub-menu-catalog');
        if(subMenu) {
            const activeLink = document.querySelector('._sub-menu-active');
            const activeBlock = document.querySelector('._sub-menu-open');
            const activeCatalog = document.querySelector('._sub-menu-show');

            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('_sub-menu-active');
                activeBlock.classList.remove('_sub-menu-open');
                activeCatalog.classList.remove('_sub-menu-show');
            }
            catalogMenu.classList.toggle('_sub-menu-show');
            targetElement.classList.toggle('_sub-menu-active');    
            subMenu.classList.toggle('_sub-menu-open');
        } else {
            console.log('Error');
        }
        e.preventDefault();
    }
    const menuCatalog = document.querySelector('.menu-top-header__link_catalog');
    if (targetElement.closest('.menu-top-header__link_catalog')) {
        menuCatalog.classList.add('_catalog-open');
        e.preventDefault();
    } 
    
    const activeLink = document.querySelector('._sub-menu-active');
    const activeBlock = document.querySelector('._sub-menu-open');
    const activeCatalog = document.querySelector('._sub-menu-show');
    const openCatalog = document.querySelector('._catalog-open');
    const activeList = document.querySelector('._menuCatalog-active');
    if (targetElement.closest('.menu-catalog__back_1')) {
        if (openCatalog) {
            openCatalog.classList.remove('_catalog-open');
        }
        if (activeList) {
            activeList.classList.remove('_menuCatalog-active');
        }
        e.preventDefault()
    }
    if (targetElement.closest('.menu-catalog__back_2')) {
        if (activeLink) {
            activeLink.classList.remove('_sub-menu-active');
        }
        if (activeBlock) {
            activeBlock.classList.remove('_sub-menu-open');
        }
        if (activeCatalog) {
            activeCatalog.classList.remove('_sub-menu-show');
        }
        e.preventDefault()
    }

}


const parent_original_menuCatalog = document.querySelector('.catalog-header__menu');
const parent_menuCatalog = document.querySelector('.menu-top-header__link_catalog');
const item_menuCatalog = document.querySelector('.menu-catalog__list');

window.addEventListener('load', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, this.window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item_menuCatalog.classList.contains('done_menuCatalog')) {
            parent_menuCatalog.insertBefore(item_menuCatalog, parent_menuCatalog.children[1]);
            item_menuCatalog.classList.add('done_menuCatalog');
        } 
        parent_menuCatalog.addEventListener('click', function() {
            item_menuCatalog.classList.add('_menuCatalog-active');
        });
    } else {
        if (item_menuCatalog.classList.contains('done_menuCatalog')) {
            parent_original_menuCatalog.insertBefore(item_menuCatalog,parent_original_menuCatalog.children[0]);
            item_menuCatalog.classList.remove('done_menuCatalog');
            item_menuCatalog.classList.remove('_menuCatalog-active');
        }
    }
});
window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, this.window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item_menuCatalog.classList.contains('done_menuCatalog')) {
            parent_menuCatalog.insertBefore(item_menuCatalog, parent_menuCatalog.children[1]);
            item_menuCatalog.classList.add('done_menuCatalog');
        } 
        parent_menuCatalog.addEventListener('click', function() {
            item_menuCatalog.classList.add('_menuCatalog-active');
        });
    } else {
        if (item_menuCatalog.classList.contains('done_menuCatalog')) {
            parent_original_menuCatalog.insertBefore(item_menuCatalog,parent_original_menuCatalog.children[0]);
            item_menuCatalog.classList.remove('done_menuCatalog');
            item_menuCatalog.classList.remove('_menuCatalog-active');
        }
    }
});


/*
const parent_original_submenuCatalog = document.querySelector('.sub-menu-catalog');
const parent_submenuCatalog = document.querySelector('[data-parent="1"]');
const item_submenuCatalog = document.querySelector('[data-submenu="1"]');

window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, this.window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item_submenuCatalog.classList.contains('done_submenuCatalog')) {
            parent_submenuCatalog.insertBefore(item_submenuCatalog, parent_submenuCatalog.children[1]);
            item_submenuCatalog.classList.add('done_submenuCatalog');
        } 
        parent_submenuCatalog.addEventListener('click', function() {
            item_submenuCatalog.classList.add('_submenuCatalog-active');
        });
    } else {
        if (item_submenuCatalog.classList.contains('done_submenuCatalog')) {
            parent_original_submenuCatalog.insertBefore(item_submenuCatalog,parent_original_submenuCatalog.children[0]);
            item_submenuCatalog.classList.remove('done_submenuCatalog');
            item_submenuCatalog.classList.remove('_submenuCatalog-active');
        }
    }
});

const parent_original_submenuCatalog2 = document.querySelector('.sub-menu-catalog');
const parent_submenuCatalog2 = document.querySelector('[data-parent="2"]');
const item_submenuCatalog2 = document.querySelector('[data-submenu="2"]');

window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, this.window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item_submenuCatalog2.classList.contains('done_submenuCatalog2')) {
            parent_submenuCatalog2.insertBefore(item_submenuCatalog2, parent_submenuCatalog2.children[1]);
            item_submenuCatalog2.classList.add('done_submenuCatalog2');
        } 
        parent_submenuCatalog2.addEventListener('click', function() {
            item_submenuCatalog2.classList.add('_submenuCatalog-active');
        });
    } else {
        if (item_submenuCatalog2.classList.contains('done_submenuCatalog2')) {
            parent_original_submenuCatalog2.insertBefore(item_submenuCatalog2,parent_original_submenuCatalog2.children[2]);
            item_submenuCatalog2.classList.remove('done_submenuCatalog2');
            item_submenuCatalog2.classList.remove('_submenuCatalog2-active');
        }
    }
});

*/




const burgerIcon = document.querySelector('.icon-menu');
const burgerMenu = document.querySelector('.menu');

burgerIcon.addEventListener('click', function() {
    burgerIcon.classList.toggle('_burger-icon-active');
    burgerMenu.classList.toggle('_burger-menu-active');
})






const parent_original = document.querySelector('.top-header__menu');
const parent = document.querySelector('.menu__body');
const item = document.querySelector('.menu-top-header__list');

window.addEventListener('load', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[1]);
            item.classList.add('done');
        } 
    } else {
        if (item.classList.contains('done')) {
            parent_original.insertBefore(item,parent_original.children[1]);
            item.classList.remove('done');
        }
    }
});
window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[1]);
            item.classList.add('done');
        } 
    } else {
        if (item.classList.contains('done')) {
            parent_original.insertBefore(item,parent_original.children[1]);
            item.classList.remove('done');
        }
    }
});

const parent_original_actions = document.querySelector('.body-header__actions');
const parent_new = document.querySelector('.header__container');
const item_phone = document.querySelector('.actions-header__phones');
window.addEventListener('load', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item_phone.classList.contains('done_phone')) {
            parent_new.insertBefore(item_phone, parent_new.children[0]);
            item_phone.classList.add('done_phone');
        } 
    } else {
        if (item_phone.classList.contains('done_phone')) {
            parent_original_actions.insertBefore(item_phone, parent_original_actions.children[2]);
            item_phone.classList.remove('done_phone');
        } 
    }
});
window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item_phone.classList.contains('done_phone')) {
            parent_new.insertBefore(item_phone, parent_new.children[0]);
            item_phone.classList.add('done_phone');
        } 
    } else {
        if (item_phone.classList.contains('done_phone')) {
            parent_original_actions.insertBefore(item_phone, parent_original_actions.children[2]);
            item_phone.classList.remove('done_phone');
        } 
    }
});



const item_heart = document.querySelector('.actions-header__favorite');
window.addEventListener('load', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item_heart.classList.contains('done_heart')) {
            parent_new.insertBefore(item_heart, parent_new.children[1]);
            item_heart.classList.add('done_heart');
        } 
    } else {
        if (item_heart.classList.contains('done_heart')) {
            parent_original_actions.insertBefore(item_heart, parent_original_actions.children[3]);
            item_heart.classList.remove('done_heart');
        }
    }
});
window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item_heart.classList.contains('done_heart')) {
            parent_new.insertBefore(item_heart, parent_new.children[1]);
            item_heart.classList.add('done_heart');
        } 
    } else {
        if (item_heart.classList.contains('done_heart')) {
            parent_original_actions.insertBefore(item_heart, parent_original_actions.children[3]);
            item_heart.classList.remove('done_heart');
        }
    }
});




const item_cart = document.querySelector('.cart-header__icon');
window.addEventListener('load', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item_cart.classList.contains('done_cart')) {
            parent_new.insertBefore(item_cart, parent_new.children[2]);
            item_cart.classList.add('done_cart');
        } 
    } else {
        if (item_cart.classList.contains('done_cart')) {
            parent_original_actions.insertBefore(item_cart,parent_original_actions.children[4]);
            item_cart.classList.remove('done_cart');
        }
    }
});
window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 992) {
        if(!item_cart.classList.contains('done_cart')) {
            parent_new.insertBefore(item_cart, parent_new.children[2]);
            item_cart.classList.add('done_cart');
        } 
    } else {
        if (item_cart.classList.contains('done_cart')) {
            parent_original_actions.insertBefore(item_cart,parent_original_actions.children[4]);
            item_cart.classList.remove('done_cart');
        }
    }
});




const parent_original_search = document.querySelector('.body-header__container');
const parent_catalog = document.querySelector('.catalog-header__container');
const item_search = document.querySelector('.body-header__search');
window.addEventListener('load', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 480) {
        if(!item_search.classList.contains('done_search')) {
            parent_catalog.insertBefore(item_search, parent_catalog.children[0]);
            item_search.classList.add('done_search');
        } 
    } else {
        if (item_search.classList.contains('done_search')) {
            parent_original_search.insertBefore(item_search,parent_original_search.children[1]);
            item_search.classList.remove('done_search');
        }
    }
});
window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 480) {
        if(!item_search.classList.contains('done_search')) {
            parent_catalog.insertBefore(item_search, parent_catalog.children[0]);
            item_search.classList.add('done_search');
        } 
    } else {
        if (item_search.classList.contains('done_search')) {
            parent_original_search.insertBefore(item_search,parent_original_search.children[1]);
            item_search.classList.remove('done_search');
        }
    }
});




/*=================================
===================================
===================================
===================================
===================================
===================================
===================================*/




function bildSliders() {
    let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
    if (sliders) {
        sliders.forEach(slider => {
            slider.parentElement.classList.add('swiper');
            slider.classList.add('swiper-wrapper');
            for (const slide of slider.children) {
                slide.classList.add('swiper-slide');
            }
        });
    }
}

function initSliders() {
    bildSliders();
    if (document.querySelector('.main-block__slider')) {
        new Swiper('.main-block__slider', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 50,
            parallax: true,
            speed: 800, 
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        });
    }
    if (document.querySelector('.products-slider__slider')) {
        new Swiper('.products-slider__slider', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            observer: true,
            observeParents: true,
            spaceBetween: 50,
            parallax: true,
            speed: 800, 
            pagination: {
                el: '.products-slider__dotts',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween:20,
                    autoHeight: true,
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1370: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }
        });
    }
    if (document.querySelector('.products-new__slider')) {
        new Swiper('.products-new__slider', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
            observer: true,
            observeParents: true,
            spaceBetween: 50,
            parallax: true,
            speed: 800, 
            pagination: {
                el: '.products-new__dotts',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween:20,
                    autoHeight: true,
                },
                605: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1370: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });
    }
    if (document.querySelector('.thumbs-images')) {
        const thumbsSwiper = new Swiper('.thumbs-images', {
            loop: true,
            observer: true,
            observeParents: true,
            spaceBetween: 10,
            slidesPerView: 4,
            speed: 800, 
            breakpoints: {
                310: {
                    direction: 'horizontal',
                    spaceBetween: 10,
                    slidesPerView: 4,
                },
                767: {
                    direction: 'vertical',
                    spaceBetween: 10,
                    slidesPerView: 4,
                },
                992: {
                    direction: 'horizontal',
                    spaceBetween: 10,
                    slidesPerView: 4,
                },
            }
        });
        new Swiper('.images-product__slider', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            thumbs: {
                swiper: thumbsSwiper,
            },
            loop: true,
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 800, 
        });
    }
};

window.addEventListener('load', function(e) {
    initSliders();
});
window.addEventListener('resize', function(e) {
    initSliders();
});





/*======================================
========================================
========================================
========================================
========================================
========================================*/





const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', function(e) {
                setRatingActiveWidth();
            });
            ratingItem.addEventListener('click', function(e) {
                initRatingVars(rating);
                
                if (rating.dataset.ajax) {
                    setRatingValue(ratingItem.value, rating);
                } else {
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
                }
            });
        }
    }

    async function setRatingValue(value, rating) {
        if (!rating.classList.contains('rating_sending')) {
            rating.classList.add('rating_sending');

            let response = await fetch('rating.json', {
                method:  'GET',
            });
            if (response.ok) {
                const result = await response.json();
                const newRating = result.newRating;
                ratingValue.innerHTML = newRating;
                setRatingActiveWidth();
                rating.classList.remove('rating_sending');
            } else {
                alert ('Error');
                rating.classList.remove('rating_sending');
            }
        }
    }
}






/*=====================================
=======================================
=======================================
=======================================
=======================================
=======================================*/





const spoilersArray = document.querySelectorAll('[data-spoilers]');
if (spoilersArray.length > 0) {
    const spoilersRegular = Array.from(spoilersArray).filter(function (item, index, self) {
        return !item.dataset.spoilers.split(',')[0];
    });
    if (spoilersRegular.length > 0) {
        initSpoilers(spoilersRegular);
    }
    const spoilersMedia = Array.from(spoilersArray).filter(function (item, index, self) {
        return item.dataset.spoilers.split(',')[0];
    });
    if (spoilersMedia.length > 0) {
        const breakpointsArray = [];
        spoilersMedia.forEach(item => {
            const params = item.dataset.spoilers;
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray [1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        let mediaQueries = breakpointsArray.map(function (item) {
            return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });
        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);
            
            const spoilersArray = breakpointsArray.filter(function (item) {
                if (item.value === mediaBreakpoint && item.type === mediaType) {
                    return true;
                }
            });
            matchMedia.addListener(function() {
                initSpoilers(spoilersArray, matchMedia);
            });
            initSpoilers(spoilersArray, matchMedia);
        });
    }
    function initSpoilers(spoilersArray, matchMedia = false) {
        spoilersArray.forEach(spoilersBlock => {
            spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
            if (matchMedia.matches || !matchMedia) {
                spoilersBlock.classList.add('_init');
                initSpoilerBody(spoilersBlock);
                spoilersBlock.addEventListener("click", setSpoilerAction);
            } else {
                spoilersBlock.classList.remove('_init');
                initSpoilerBody(spoilersBlock, false);
                spoilersBlock.removeEventListener('click', setSpoilerAction);
            }
        });
    }
    function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
        const spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');
        if (spoilerTitles.length > 0) {
            spoilerTitles.forEach(spoilerTitle => {
                if (hideSpoilerBody) {
                    spoilerTitle.removeAttribute('tabindex');
                    if (!spoilerTitle.classList.contains('_active')) {
                        spoilerTitle.nextElementSibling.hidden = true;
                    }
                } else {
                    spoilerTitle.setAttribute('tabindex', '-1');
                    spoilerTitle.nextElementSibling.hidden = false;
                }
            });
        }
    }
    function setSpoilerAction(e) {
        const el = e.target;
        if (el.hasAttribute('data-spoiler') || el.closest('[data-spoiler]')) {
            const spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
            const spoilersBlock = spoilerTitle.closest('[data-spoilers]');
            const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler') ? true : false;
            if (!spoilersBlock.querySelectorAll('_slide').length) {
                if (oneSpoiler && !spoilerTitle.classList.contains('_active')) {
                    hideSpoilersBody(spoilersBlock);
                }
                spoilerTitle.classList.toggle('_active');
                _slideToggle(spoilerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        }
    }
    function hideSpoilersBody(spoilersBlock) {
        const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._active');
        if (spoilerActiveTitle) {
            spoilerActiveTitle.classList.remove('_active');
            _slideUp(spoilerActiveTitle.nextElementSibling, 500);
        }
    }
}


let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration +'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (target.hidden) {
            target.hidden = false
        }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp (target,duration);
    }
}




/*=========================================
===========================================
===========================================
===========================================
===========================================
===========================================
===========================================*/

/*
import * as noUiSlider from 'nouislider';


export function rangeInit() {

    const rangeItems = document.querySelectorAll('[data-range]');
    if (rangeItems.length) {
        rangeItems.forEach(rangeItem => {
            const fromValue = rangeItem.querySelector('[data-range-from]');
            const toValue = rangeItem.querySelector('[data-range-to]');
            const item = rangeItem.querySelector('[data-range-item]');
            console.log(fromValue.value);
            noUiSlider.create(item, {
                start: [Number(fromValue.value), Number(toValue.value)],
                connect: true,
                range: {
                    'min': [Number(fromValue.dataset.rangeFrom)],
                    'max': [Number(toValue.dataset.rangeTo)]
                }
            });
        });
    }
}
rangeInit();


*/





const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [100, 500],
        connect: true,
        tooltips: [true, true],
        step: 1,
        range: {
            'min': [0],
            'max': [1000]
        }
    });

    const input1 = document.getElementById('input-1');
    const input2 = document.getElementById('input-2');
    const inputs = [input1, input2];

    rangeSlider.noUiSlider.on('update', function(values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr)
    };

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}



/*==========================================
============================================
============================================*/

/*

if (document.querySelector('.filter-catalog__title')) {
    document.querySelector('.filter-catalog__title').addEventListener('click', function(e) {
        if (window.innerWidth < 992) {
            document.querySelector('.filter-catalog__title').classList.toggle('_active');
        }
    });
}
*/



/*====================================
======================================
======================================
======================================
======================================*/


const plus = document.querySelector('.quantity__button_minus');
const minus = document.querySelector('.quantity__button_plus');
const number = document.querySelector('.quantity__input');

let a = 1;

if (plus) {
    plus.addEventListener('click', () => {
        a++;
        number.innerHTML = a;
    });
}
if (minus) {
    minus.addEventListener('click', () => {
        if (a > 1) {
            a--;
            number.innerHTML = a;
        }
    });
}