export default function initAnimationScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
        const windowHalf = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((item) => {
                const sectionTop = item.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowHalf) < 0;

                if (isSectionVisible) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}