export default class Modal {
  constructor(container, open, close) {
    this.containerModal = document.querySelector(container);
    this.buttonOpen = document.querySelector(open);
    this.buttonClose = document.querySelector(close);

    // bind this to the callback to do reference to the class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOut = this.clickOut.bind(this);
  }

  // Open or clone modal
  toggleModal() {
    this.containerModal.classList.toggle('active');
  }

  // Add toggle event to the modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Close modal when click out
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
