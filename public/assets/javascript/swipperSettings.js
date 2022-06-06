// Header settings
var swiper = new Swiper(".headerSwiper", {
  direction: "vertical",
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// News settings
var swiper = new Swiper(".newsSwiper", {
  breakpoints: {
    1350: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
    1100: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 2.2,
      spaceBetween: 40,
    },
    390: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Partnes settings
var swiper = new Swiper(".mySwiperPartners", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1350: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    390: {
      slidesPerView: 2.7,
      spaceBetween: 30,
    },
    360: {
      slidesPerView: 2.7,
      spaceBetween: 30,
    },
  },
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// life swiper
var thumbsSwiper = new Swiper(".thumbsSwiper", {
  spaceBetween: 5,
  // loop: true,
  slidesPerView: 5,
  freeMode: true,
  fadeEffect: {
    crossFade: true,
  },
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".lifeSwiper", {
  spaceBetween: 10,
  thumbs: {
    swiper: thumbsSwiper,
  },
  effect: "fade",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// News settings
var swiper = new Swiper(".newsHeaderSwiper", {
  direction: "vertical",
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
  grabCursor: true,

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
