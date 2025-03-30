document.addEventListener('DOMContentLoaded', init);


function getData(API_KEY, lat, lng, weatherSummaryElement, temperatureElement) {
  fetch(
    `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat.value}&lon=${lng.value}&lang=pl&units=I`
  )
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
    })
    .then((dataFromAPI) => {
      const data = dataFromAPI.data[0];
      weatherSummaryElement.innerText = data.weather.description;
      temperatureElement.innerText = data.temp;
    });
}

function init() {
  const API_KEY = "3a021506780540bd958064a8f3c522c0";
  const formElement = document.querySelector(".form");
  const latElement = document.querySelector(".weather__lat");
  const lngElement = document.querySelector(".weather__lng");
  const weatherSummaryElement = document.querySelector(".weather__summary");
  const temperatureElement = document.querySelector(".weather__temperature");

  formElement.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    const [lat, lng] = e.target.elements;

    latElement.innerText = lat.value;
    lngElement.innerText = lng.value;

    getData(API_KEY, lat, lng, weatherSummaryElement, temperatureElement);
  }
}