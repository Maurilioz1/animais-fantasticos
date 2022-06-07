export default function initAnimaNumbers() {
  function animaNumbers() {
    const numbers = document.querySelectorAll('[data-number]');

    numbers.forEach((item) => {
      const number = +item.innerText;
      const increment = number / 100;
      let start = 0;
      const timer = setInterval(() => {
        start += increment;

        item.innerText = Math.floor(start);

        if (start > number) {
          item.innerText = number;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animaNumbers();
    }
  }

  const observeTarget = document.querySelector('.numbers');
  observer = new MutationObserver(handleMutation);
  observer.observe(observeTarget, { attributes: true });
}
