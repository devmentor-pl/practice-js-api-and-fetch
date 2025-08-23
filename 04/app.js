const apiUrl = "https://api.weatherbit.io/v2.0/current?lang=pl&units=I";
const apiKey = "8245143bd6594e79a0224bf43bf22e62";

const latInput = document.querySelector(".form__field--lat");
const lngInput = document.querySelector(".form__field--lng");
const form = document.querySelector(".form");

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");

  form.addEventListener("submit", (e) => {
    submitCoords(e);
  });
}

function submitCoords(e) {
  e.preventDefault();
  const lngVal = lngInput.value;
  const latVal = latInput.value;

  if (lngVal.length > 0 && latVal.length > 0) {
    if (!isNaN(lngVal) || !isNaN(latVal)) {
      getWeather(lngVal, latVal);
    } else {
      alert("Parametry muszą być liczbami!");
    }
  } else {
    alert("Podaj oba parametry!");
  }
}

function getWeather(lngVal, latVal) {
  fetch(`${apiUrl}&key=${apiKey}&lat=${latVal}&lon=${lngVal}`)
    .then((resp) => resp.json())
    .then((data) => renderWeather(data.data[0]));
}

function renderWeather(data) {
  const latEl = document.querySelector(".weather__lat");
  const lngEl = document.querySelector(".weather__lng");
  const weatherSummaryEl = document.querySelector(".weather__summary");
  const weatherTemperatureEl = document.querySelector(".weather__temperature");

  const { lat, lon, weather, temp } = data;

  latEl.textContent = lat;
  lngEl.textContent = lon;
  weatherSummaryEl.textContent = weather.description.toLowerCase();
  weatherTemperatureEl.textContent = temp;
}
