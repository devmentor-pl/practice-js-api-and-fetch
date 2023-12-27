document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('DOM');
  const apiKey = '50231c7d52fb403fbc65fb581b441788';
  const latitudeEl = document.querySelector('.form__field--lat');
  const longitudeEl = document.querySelector('.form__field--lng');
  const formEl = document.querySelector('form');
  formEl &&
    formEl.addEventListener('submit', (e) =>
      getData(e, latitudeEl, longitudeEl, apiKey)
    );
}

async function getData(e, latitudeEl, longitudeEl, apiKey) {
  e.preventDefault();
  const url = `https://api.weatherbit.io/v2.0/current?lat=${latitudeEl.value}&lon=-${longitudeEl.value}&key=${apiKey}&include=minutely`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Błąd: ${response.status}`);
    }
    const allData = await response.json();
    console.log(allData.data[0].weather);
    displayData(allData, latitudeEl, longitudeEl);
  } catch (error) {
    console.log('Błąd', error);
  }
}

function displayData(allData, latitudeEl, longitudeEl) {
  const latTextEl = document.querySelector('.weather__lat');
  const lngTextEl = document.querySelector('.weather__lng');
  const summaryEl = document.querySelector('.weather__summary');
  const tempEl = document.querySelector('.weather__temperature');
  latTextEl.textContent = latitudeEl.value;
  lngTextEl.textContent = longitudeEl.value;
  summaryEl.textContent = allData.data[0].weather.description;
  const tempValueCel = parseInt(allData.data[0].temp);
  let tempValueFahr = tempValueCel * 1.8 + 32;
  tempEl.textContent = tempValueFahr;
}
