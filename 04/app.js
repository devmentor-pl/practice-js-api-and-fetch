document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");

  const buttonEl = document.querySelector(".form__submit");
  if (buttonEl) buttonEl.addEventListener("click", returnTemperature);
}

function returnTemperature(event) {
  event.preventDefault();

  const { latitude, longitude } = takeDataFromUser();

  const api = `https://api.weatherbit.io/v2.0/current?key=4c8838baf06a442589b1922f6840ab3b&lat=${latitude}&lon=${longitude}&lang=pl&units=I`;

  const promise = fetch(api);
  promise
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    })
    .then((data) => {
      showData(
        latitude,
        longitude,
        data.data[0].weather.description,
        data.data[0].app_temp
      );
    })
    .catch((err) => console.error(err));
}

function takeDataFromUser() {
  const latitudeFromUser = document.querySelector(".form__field--lat").value;
  const longitudeFromUser = document.querySelector(".form__field--lng").value;
  if ((latitudeFromUser, longitudeFromUser)) {
    return { latitude: latitudeFromUser, longitude: longitudeFromUser };
  }
}

function showData(lat, lng, summary, temperature) {
  latEl = document.querySelector(".weather__lat");
  lngEl = document.querySelector(".weather__lng");
  summaryEl = document.querySelector(".weather__summary");
  temperatureEl = document.querySelector(".weather__temperature");

  latEl.innerText = lat;
  lngEl.innerText = lng;
  summaryEl.innerText = summary;
  temperatureEl.innerText = temperature;
}
