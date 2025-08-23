document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  formSubmitListener();
}

function formSubmitListener() {
  const formEl = document.querySelector("form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    showData();
  });
}

function showData() {
  const weatherLat = document.querySelector(".weather__lat");
  const weatherLng = document.querySelector(".weather__lng");
  const weatherSummary = document.querySelector(".weather__summary");
  const weatherTemp = document.querySelector(".weather__temperature");
  getData()
    .then(({ data }) => {
      console.log(data);
      const [
        {
          lat,
          lon,
          weather: { description },
          temp,
        },
      ] = data;
      weatherLat.innerText = lat;
      weatherLng.innerText = lon;
      weatherSummary.innerText = description;
      weatherTemp.innerText = temp;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function getCoordinates() {
  const formEl = document.querySelector("form");
  const latitudeInput = formEl.querySelector(".form__field--lat");
  const longitudeInput = formEl.querySelector(".form__field--lng");
  const latitudeValue = latitudeInput.value;
  const longitudeValue = longitudeInput.value;
  if (!latitudeValue || !longitudeValue) {
    console.error(
      "Wartości szerokości i długości geograficznej musza byc podane!"
    );
    alert("Wartości szerokości i długości geograficznej musza byc podane!");
    return Promise.reject(
      "Wartości szerokości i długości geograficznej musza byc podane!"
    );
  }
  console.log(latitudeValue, longitudeValue);
  formEl.reset();
  return Promise.resolve({ latitudeValue, longitudeValue });
}

function getData() {
  return getCoordinates().then(({ latitudeValue, longitudeValue }) => {
    console.log(latitudeValue, longitudeValue);
    const key = "f4821fb7dcdb4db4b6ba1a473dc0a4c2";
    const latitude = latitudeValue;
    const longitude = longitudeValue;

    return fetch(
      `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}&lang=pl`
    ).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    });
  });
}
