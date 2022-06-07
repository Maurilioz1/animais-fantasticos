import initAnimationScroll from './modules/animation-scroll.js';
import ScrollSmooth from './modules/scroll-smooth.js';
import Accordion from './modules/accordion.js';
import initTabNave from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';
import initFetchBeasts from './modules/fetch-beasts.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSmooth = new ScrollSmooth('.js-menu a[href^="#"]');
scrollSmooth.init();

initAnimationScroll();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

initTabNave();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchBeasts();
initFetchBitcoin();
