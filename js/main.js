const swiperTop = new Swiper('.top__swiper', {
  // Optional parameters
  // effect: 'slide',
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

const swiperBestSelling = new Swiper('.best-selling__swiper', {
  // Optional parameters
  //  effect: 'slide',
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  slidesPerView: 4,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1140: {
      slidesPerView: 4,
    },
    868: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

const swiperInstrument = new Swiper('.instrument-store-swiper', {
  effect: "cards",
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next-white',
    prevEl: '.swiper-button-prev-white',
  },
});

const menuBtn = document.querySelector('.menu__btn');
const menuMob = document.querySelector('.header__menu-mob');
const buttonClose = document.querySelector('.button__close');

menuBtn.addEventListener('click', () => {
  menuMob.classList.add('header__menu-mob--active');
})

buttonClose.addEventListener('click', () => {
  menuMob.classList.remove('header__menu-mob--active');
})


const swiperServises = new Swiper(".servises-swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});