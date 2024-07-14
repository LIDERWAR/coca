import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

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
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides:true,
        autoplay: {
          delay: 1000,
        },
        loop: true,
        slideClass: 'partners__slider-item',
        wrapperClass: 'partners__slider-list',
        breakpoints: {
          651: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          451: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }
      });
      slider.dataset.mobile = 'true';
    }
    if (window.innerWidth > 768 && mySwiper) {
        mySwiper.destroy(true, true);
        slider.dataset.mobile = 'false';
    }
  }
  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
  });
};
