import AnimaNumbers from './animation-numbers.js';

export default async function initFetchBeasts() {
  async function fetchBeasts(url) {
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    const numbersGrid = document.querySelector('.numbers-grid');

    function createBeast(beast) {
      const div = document.createElement('div');
      div.classList.add('number-beast');
      div.innerHTML = `
                <h3>${beast.specie}</h3>
                <span data-number>${beast.total}</span>
            `;

      return div;
    }

    response.forEach((beast) => {
      const divAnimal = createBeast(beast);

      numbersGrid.appendChild(divAnimal);
    });

    const animaNumbers = new AnimaNumbers(
      '[data-number]',
      '.numbers',
      'active'
    );
    animaNumbers.init();
  }

  fetchBeasts('./api-beasts.json');
}
