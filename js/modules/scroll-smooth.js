export default class ScrollSmooth {
  constructor(links, options) {
    this.intenalLinks = document.querySelectorAll(links);

    if (options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.intenalLinks.forEach((item) => {
      item.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.intenalLinks.length) {
      this.addLinkEvent();
    }

    return this;
  }
}
