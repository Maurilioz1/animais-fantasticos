function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active');

        const activeTab = (index) => {
            tabContent.forEach((item) => {
                item.classList.remove('active');
            });

            tabContent[index].classList.add('active');
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'active';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

function initScrollSmooth() {
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

            // const top = section.offsetTop;
            // window.scrollTo({
            //     top: top,
            //     behavior: 'smooth'
            // });
        }

        intenalLinks.forEach((item) => {
            item.addEventListener('click', scrollToSection);
        });
    }
}

function initAnimationScroll() {
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

initTabNav();
initAccordion();
initScrollSmooth();
initAnimationScroll();