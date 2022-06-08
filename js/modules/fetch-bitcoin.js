export default function fetchBitcoin(url, target) {
  const btc = document.querySelector(target);

  async function getBitcoin() {
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    btc.innerText = (100 / response.BRL.sell).toFixed(5);
  }

  try {
    getBitcoin();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
}
