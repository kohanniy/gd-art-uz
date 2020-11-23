class PopupMobileMenu {
  constructor({menuSelector, buttonSelector, linkSelector}) {
    this._menu = document.querySelector(menuSelector);
    this._toggleMenuButton = document.querySelector(buttonSelector);
    this._menuLinks = Array.from(document.querySelectorAll(linkSelector));
    this._handleButtonClick = this._handleButtonClick.bind(this);
    this._setDesiredStateMenu = this._setDesiredStateMenu.bind(this);
  }

  _open() {
    this._toggleMenuButton.classList.remove('menu__toggle-btn_closed');
    this._toggleMenuButton.classList.add('menu__toggle-btn_opened');
    this._menu.classList.add('show-menu');
    this._menuLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.add('show-menu_link');
      }, i * 200);
    });
  }

  _close() {
    let index = 0;
    this._toggleMenuButton.classList.add('menu__toggle-btn_closed');
    this._toggleMenuButton.classList.remove('menu__toggle-btn_opened');
    for (let i = this._menuLinks.length - 1; i >= 0; i -= 1) {
      index += 1;
      setTimeout(() => {
        this._menuLinks[i].classList.remove('show-menu_link');
      }, index * 200);
    }
    setTimeout(() => {
      this._menu.classList.remove('show-menu');
    }, 550);
  }

  _handleButtonClick() {
    if (this._menu.classList.contains('show-menu')) {
      this._close();
    } else {
        this._open();
    }
  }

  _setDesiredStateMenu() {
    if (window.matchMedia('(min-width: 456px)').matches) {
      this._close();
      this._toggleMenuButton.removeEventListener('click', this._handleButtonClick);
    } else {
      this._toggleMenuButton.addEventListener('click', this._handleButtonClick);
      }
  }

  setEventListeners() {
    if (window.matchMedia('(max-width: 455px)').matches) {
      this._toggleMenuButton.addEventListener('click', this._handleButtonClick);
    }
    window.addEventListener('resize', this._setDesiredStateMenu);
  }
}

export default PopupMobileMenu;
