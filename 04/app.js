document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");

  const form = document.querySelector(".form");
  const weatherLat = document.querySelector(".weather__lat");
  const weatherLng = document.querySelector(".weather__lng");
  const tempF = document.querySelector(".weather__temperature");
  const weatherDesc = document.querySelector(".weather__summary");

  form.addEventListener("submit", handleForm);

  function handleForm(e) {
    e.preventDefault();
    const formEl = e.target.elements;

    const [lat, lng] = formEl;
    const latValue = (weatherLat.innerText = lat.value);
    const lngValue = (weatherLng.innerText = lng.value);

    getDataFromApiWheather(latValue, lngValue);
  }

  function getDataFromApiWheather(latValue, lngValue) {
    const keyApi = "ae1e5f94eb254aaf99b6b687f161b9c6";
    const urlApi = `https://api.weatherbit.io/v2.0/current?key=${keyApi}&lat=${latValue}&lon=${lngValue}&units=I&lang=pl`;

    const promise = fetchGet(urlApi);
    promise
      .then((data) => {
        tempF.innerText = data.data[0].temp;
        weatherDesc.innerText = data.data[0].weather.description;
      })
      .catch((err) => {
        console.log("Can not download data", err);
      });
  }

  function fetchGet(url) {
    return fetch(url).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }

      return Promise.reject(resp);
    });
  }
}
