import '/scss/contact.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { usePhone } from './components/contact/phone';
import { accordionFooter } from './components/home/accordion';

useTheme();
useBurger();
usePhone();
accordionFooter();

