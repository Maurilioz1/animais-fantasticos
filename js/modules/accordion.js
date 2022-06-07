export default class initAccordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Add accordion events
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => {
        this.toggleAccordion(item);
      });
    });
  }

  init() {
    if (this.accordionList.length) {
      // Active first item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
