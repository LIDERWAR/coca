import '/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useStickyHeader } from './components/useStickyHeader.js';
import { accordionFooter } from './components/home/accordion.js';

useTheme();
useBurger();
useStickyHeader();
accordionFooter();