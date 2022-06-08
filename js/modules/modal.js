export default class Modal {
  constructor(container, open, close) {
    this.containerModal = document.querySelector(container);
    this.buttonOpen = document.querySelector(open);
    this.buttonClose = document.querySelector(close);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOut = this.clickOut.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('active');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOut(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  addModalEvents() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOut);
  }

  init() {
    if (this.containerModal && this.buttonOpen && this.buttonClose) {
      this.addModalEvents();
    }

    return this;
  }
}
