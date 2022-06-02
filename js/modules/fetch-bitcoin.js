export default function initFetchBitcoin() {
    const btc = document.querySelector('.price-btc');

    try {
        async function fetchBitcoin() {
            const fetchBitcoin = await fetch('https://blockchain.info/ticker');
            const response = await fetchBitcoin.json();
            btc.innerText = (100 / response.BRL.sell).toFixed(5);
        }

        fetchBitcoin();
    } catch (error) {
        console.log(error.message);
    }
}