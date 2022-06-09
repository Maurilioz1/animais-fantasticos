import outsideClick from './outside-click.js';

export default class MenuMobile {
  constructor(menu, list, events) {
    this.menuButton = document.querySelector(menu);
    this.menuList = document.querySelector(list);
    this.activeClass = 'active';

    if (events === undefined) {
      this.events = ['click', 'touch'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();

    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((item) =>
      this.menuButton.addEventListener(item, this.openMenu, { passive: true })
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}
