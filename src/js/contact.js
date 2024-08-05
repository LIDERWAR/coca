import '/scss/contact.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { usePhone } from './components/contact/phone';
import { accordionFooter } from './components/home/accordion';
import { useMap } from './components/contact/map';

useTheme();
useBurger();
usePhone();
accordionFooter();
useMap();

