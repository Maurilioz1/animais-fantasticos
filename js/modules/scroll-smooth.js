export default function initScrollSmooth() {
    const intenalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    if (intenalLinks.length) {
        function scrollToSection(event) {
            event.preventDefault();

            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        intenalLinks.forEach((item) => {
            item.addEventListener('click', scrollToSection);
        });
    }
}