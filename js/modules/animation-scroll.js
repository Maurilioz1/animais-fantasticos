import debounce from './debounce.js';

export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.distance = [...this.sections].map((item) => {
      const offset = item.offsetTop;

      return {
        element: item,
        offset: Math.floor(offset - this.windowHalf),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add('active');
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }

    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
