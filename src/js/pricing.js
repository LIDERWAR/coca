import '/scss/pricing.scss';

// components

import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { usePriceSwitcher } from './components/pricing/priceSwitcher';
import { accordionFooter } from './components/home/accordion';


useTheme();
useBurger();
usePriceSwitcher();
accordionFooter();
