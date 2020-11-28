import './index.css';
import PopupMobileMenu from '../components/PopupMobileMenu.js';
import { mobileMenuSelectors } from '../utils/constants.js';

const popupMobileMenu = new PopupMobileMenu(mobileMenuSelectors);
const date = document.querySelector('.js-date');

date.textContent = `© ${new Date().getFullYear()} Все права защищены`;

popupMobileMenu.setEventListeners();
