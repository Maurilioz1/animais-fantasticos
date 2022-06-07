export default function initModal() {
  const container = document.querySelector('[data-modal="container"]');
  const buttonOpen = document.querySelector('[data-modal="open"]');
  const buttonClose = document.querySelector('[data-modal="close"]');

  function toggleModal(event) {
    event.preventDefault();
    container.classList.toggle('active');
  }

  function clickOut(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  function pressEsc(event) {
    if (container.classList.contains('active') && event.key === 'Escape') {
      container.classList.toggle('active');
    }
  }

  if (container && buttonOpen && buttonClose) {
    buttonOpen.addEventListener('click', toggleModal);
    buttonClose.addEventListener('click', toggleModal);
    container.addEventListener('click', clickOut);
    window.addEventListener('keydown', pressEsc);
  }
}
