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

  getWeatherData(latValue, lonValue)
    .then((data) => {
      const weatherObj = data.data[0];
      renderDescription(weatherObj);
    })
    .catch((err) => console.error(err));
}

async function getWeatherData(latValue, lonValue) {
  const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${latValue}&lon=${lonValue}&key=4dd677db47104eaab7a3227c27cb14b4&lang=pl&units=I`;

  const resp = await fetch(apiUrl);
  if (!resp.ok) {
    throw new Error(resp.status);
  }
  const data = await resp.json();
  return data;
}

function renderDescription(data) {
  const { lat, lon, weather, temp } = data;
  document.querySelector(".weather__lat").textContent = lat;
  document.querySelector(".weather__lng").textContent = lon;
  document.querySelector(".weather__summary").textContent = weather.description;
  document.querySelector(".weather__temperature").textContent = temp;
}
