document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  const form = document.querySelector(".form");
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();

  const latValue = e.currentTarget.elements[0].value;
  const lonValue = e.currentTarget.elements[1].value;

  const data = getWeatherData(latValue, lonValue);
  data
    .then((data) => {
      const weatherObj = data.data[0];
      renderDescription(weatherObj);
    })
    .catch((err) => console.error(err));
}

async function getWeatherData(latValue, lonValue) {
  const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${latValue}&lon=${lonValue}&key=4dd677db47104eaab7a3227c27cb14b4&lang=pl&units=I`;

  const resp = await fetch(apiUrl);
  if (resp.ok) return resp.json();
}

function renderDescription(data) {
  const latEl = document.querySelector(".weather__lat");
  const lonEl = document.querySelector(".weather__lng");
  const summaryEl = document.querySelector(".weather__summary");
  const tempEl = document.querySelector(".weather__temperature");

  const { lat, lon, weather, temp } = data;

  latEl.textContent = lat;
  lonEl.textContent = lon;
  summaryEl.textContent = weather.description;
  tempEl.textContent = temp;
}
