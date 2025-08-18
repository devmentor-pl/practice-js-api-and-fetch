document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('DOM');

  const form = document.querySelector('.form');
  const inputLat = document.querySelector('.form__field--lat');
  const inputLng = document.querySelector('.form__field--lng');

  const weatherLat = document.querySelector('.weather__lat');
  const weatherLng = document.querySelector('.weather__lng');
  const weatherSummary = document.querySelector('.weather__summary');
  const weatherTemp = document.querySelector('.weather__temperature');

  const apiKey = '022a40fc149e46668af305e2c3de46b0';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const lat = inputLat.value.trim();
    const lng = inputLng.value.trim();

    if (!lat || !lng) {
      alert('Proszę podać zarówno szerokość, jak i długość geograficzną.');
      return;
    }

    const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}&lang=pl`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then((data) => {
        const weatherData = data.data[0];

        weatherLat.textContent = weatherData.lat;
        weatherLng.textContent = weatherData.lon;
        weatherSummary.textContent = weatherData.weather.description;
        weatherTemp.textContent = weatherData.temp;
      })
      .catch((err) => {
        console.error(err);
        alert(
          'Nie udało się pobrać pogody. Sprawdź współrzędne lub połączenie internetowe.'
        );
      });
  });
}
