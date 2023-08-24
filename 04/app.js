document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('DOM');

  const formEl = document.querySelector('form');

  if (formEl) {
    formEl.addEventListener('submit', onSubmit);
  }
}

function onSubmit(e) {
  e.preventDefault();

  const [latEl, lonEl] = e.target.elements;
  const lat = Number(latEl.value);
  const lon = Number(lonEl.value);

  if (!isNaN(lat) && !isNaN(lon)) {
    getData(lat, lon);
  } else {
    alert('Podane dane musza byc liczbami.');
  }
}

function getData(lat, lon) {
  const key = '27a94ba225e043ec8599c907bee29f7f';
  const lang = 'pl';
  fetch(
    `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lon}&lang=${lang}`
  )
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((data) => {
      const summary = data.data[0].weather.description;
      const temperature = data.data[0].temp;
      insertData(lat, lon, summary, temperature);
    })
    .catch((err) => console.error('err', err));
}

function insertData(lat, lon, summary, temperature) {
  const latEl = document.querySelector('.weather__lat');
  const lonEl = document.querySelector('.weather__lng');
  const summaryEl = document.querySelector('.weather__summary');
  const temperatureEl = document.querySelector('.weather__temperature');
  latEl.innerText = lat;
  lonEl.innerText = lon;
  summaryEl.innerText = summary;
  temperatureEl.innerText = CelsiusToFahrenheit(temperature);
}

function CelsiusToFahrenheit(temp) {
  return temp * (9 / 5) + 32;
}
