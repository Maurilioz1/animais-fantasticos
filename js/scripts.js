import ScrollSmooth from './modules/scroll-smooth.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchBeasts from './modules/fetch-beasts.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimationScroll from './modules/animation-scroll.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operation.js';

const scrollSmooth = new ScrollSmooth('.js-menu a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

const tabNav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabNav.init();

const modal = new Modal(
  '[data-modal="container"]',
  '[data-modal="open"]',
  '[data-modal="close"]'
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimationScroll();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchBitcoin();

fetchBeasts('../../api-beasts.json', '.numbers-grid');
