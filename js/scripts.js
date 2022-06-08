import ScrollSmooth from './modules/scroll-smooth.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchBeasts from './modules/fetch-beasts.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import AnimationScroll from './modules/animation-scroll.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Operation from './modules/operation.js';

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

const animationScroll = new AnimationScroll('.js-scroll');
animationScroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const operation = new Operation('[data-week]', 'open');
operation.init();

fetchBeasts('./api-beasts.json', '.numbers-grid');
fetchBitcoin('https://blockchain.info/ticker', '.price-btc');
