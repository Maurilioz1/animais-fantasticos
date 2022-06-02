import initAnimaNumbers from './animation-numbers.js';

export default async function initFetchBeasts() {
    async function fetchBeasts(url) {
        const fetchBeasts = await fetch(url);
        const response = await fetchBeasts.json();
        const numbersGrid = document.querySelector('.numbers-grid');

        response.forEach(beast => {
            const divAnimal = createBeast(beast);
            numbersGrid.appendChild(divAnimal);
        });

        initAnimaNumbers();
    }

    function createBeast(beast) {
        const div = document.createElement('div');
        div.classList.add('number-beast');
        div.innerHTML = `
            <h3>${beast.specie}</h3>
            <span data-number>${beast.total}</span>
        `;

        return div;
    }

    fetchBeasts('./api-beasts.json');
}