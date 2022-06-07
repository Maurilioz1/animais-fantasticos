import outsideClick from './outside-click.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();

    this.classList.toggle('active');

    outsideClick(this, ['touch', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((item) => {
    ['touch', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick, { passive: true });
    });
  });
}
