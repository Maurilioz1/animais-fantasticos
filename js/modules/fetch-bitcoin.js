export default function initFetchBitcoin() {
  const btc = document.querySelector('.price-btc');

  async function fetchBitcoin() {
    const fetchData = await fetch('https://blockchain.info/ticker');
    const response = await fetchData.json();
    btc.innerText = (100 / response.BRL.sell).toFixed(5);
  }

  try {
    fetchBitcoin();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
}
