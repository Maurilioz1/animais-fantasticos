import AnimaNumbers from './animation-numbers.js';

export default async function fetchBeasts(url, target) {
  function createBeast(beast) {
    const div = document.createElement('div');
    div.classList.add('number-beast');
    div.innerHTML = `
              <h3>${beast.specie}</h3>
              <span data-number>${beast.total}</span>
          `;

    return div;
  }

  const numbersGrid = document.querySelector(target);

  function fillBeasts(beast) {
    const divAnimal = createBeast(beast);
    numbersGrid.appendChild(divAnimal);
  }

  function animaBeastsNumbers() {
    const animaNumbers = new AnimaNumbers(
      '[data-number]',
      '.numbers',
      'active'
    );
    animaNumbers.init();
  }

  async function createBeasts() {
    try {
      const fetchData = await fetch(url);
      const response = await fetchData.json();

      response.forEach((beast) => {
        fillBeasts(beast);
      });

      animaBeastsNumbers();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  return createBeasts();
}
