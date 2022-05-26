import outsideClick from './outside-click.js';

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touch'];

    if (menuButton) {
        function openMenu() {
            menuList.classList.add('active');
            menuButton.classList.add('active');

            outsideClick(menuList, eventos, () => {
                menuList.classList.remove('active');
                menuButton.classList.remove('active');
            });
        }

        eventos.forEach(item => menuButton.addEventListener(item, openMenu, { passive: true }));
    }
}