import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useOverviewSlider = () => {
  new Swiper('.overview__slider', {
    modules: [Navigation],
    slidesPerView: '1',
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.overview__slider-btns-right',
      prevEl: '.overview__slider-btns-left',
    },
    breakpoints: {
      576: {
        slidesPerView: '1.3',
      },
      720: {
        slidesPerView: '1.7',
      },
      992: {
        slidesPerView: '2.3',
      },
    },
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.articles__btn--next',
      prevEl: '.articles__btn--prev',
    },
    // breakpoints: {
    //   576: {
    //     slidesPerView: '1.3',
    //   },
    //   720: {
    //     slidesPerView: '1.7',
    //   },
    //   992: {
    //     slidesPerView: 'auto',
    //   },
    // },
  });
};