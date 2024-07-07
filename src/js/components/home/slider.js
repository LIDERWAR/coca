import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};

// =============================================================
export const partnerSlider = () => {
  const slider = document.querySelector('.partners__slider');

  let mySwiper;

  function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
      mySwiper = new Swiper(slider, {
        modules: [Autoplay],
        slidesPerView: 4,
        spaceBetween: 10,
        autoplay: {
          delay:1000,
        },
        loop: true,
        slideClass: 'partners__slider-item',
        wrapperClass: 'partners__slider-list',
      });

      slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 768) {
      slider.dataset.mobile = 'false';

      mySwiper.destroy();
    }
  }
  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
  });
};
