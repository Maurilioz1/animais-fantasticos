import outsideClick from "./outside-click.js";

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    function handleClick(event) {
        event.preventDefault();

        this.classList.add('active');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        });
    }

    dropdownMenus.forEach((item) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            item.addEventListener(userEvent, handleClick);
        });
    });
}