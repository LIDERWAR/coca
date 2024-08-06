import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.about__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.about__slider-btns-right',
      prevEl: '.about__slider-btns-left',
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    modules: [Navigation],
    slidesPerView: '1',
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.team__slider-btns-right',
      prevEl: '.team__slider-btns-left',
    },
    breakpoints: {
      400: {
        slidesPerView: '2',
      },
      810: {
        slidesPerView: '3',
      },
    },
  });
};