export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }

  // Active tab according with index
  activeTab = (index) => {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });

    this.tabContent[index].classList.add(this.activeClass);
  };

  // Add tabs events
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Active first item
      this.activeTab(0);
      this.addTabNavEvent();
    }

    return this;
  }
}
