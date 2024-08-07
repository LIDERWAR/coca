import '/scss/contact.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { usePhone } from './components/contact/phone';
import { accordionFooter } from './components/home/accordion';
import { useMap } from './components/contact/map';
import { partnerSlider } from './components/home/slider';

useTheme();
useBurger();
usePhone();
accordionFooter();
useMap();
partnerSlider();


