import PopupMobileMenu from '../components/PopupMobileMenu.js';
import { mobileMenuSelectors } from '../utils/constants.js';

const popupMobileMenu = new PopupMobileMenu(mobileMenuSelectors);

popupMobileMenu.setEventListeners();






// element.mouseover(function(){

//   // the animation starts
//   element.toggleClass('hinge animated');

//   // do something when animation ends
//   element.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', (e) => {

//    // trick to execute the animation again
//     $(e.target).classList.remove('hinge animated');

//   });

// });
