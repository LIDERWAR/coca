import 'swiper/css';
import '/scss/main.scss';

// components

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider';
import { partnerSlider } from './components/home/slider';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
partnerSlider();
