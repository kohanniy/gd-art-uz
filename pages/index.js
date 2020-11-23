import PopupMobileMenu from '../components/PopupMobileMenu.js';
import { mobileMenuSelectors } from '../utils/constants.js';

const popupMobileMenu = new PopupMobileMenu(mobileMenuSelectors);

popupMobileMenu.setEventListeners();
