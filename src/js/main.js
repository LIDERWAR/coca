import 'swiper/css';
import 'swiper/css/effect-fade';
import '/scss/main.scss';

// components

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider';
import { partnerSlider } from './components/home/slider';
import { accordionFooter } from './components/home/accordion';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
partnerSlider();
accordionFooter();
