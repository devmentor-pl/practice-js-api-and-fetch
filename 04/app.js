document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  const button = document.querySelector(".form__submit");
  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const latitude = document.querySelector(".form__field--lat").value;
      const longitude = document.querySelector(".form__field--lng").value;
    //tu należy wpisać swój klucz  
    const key = "f8b504845f0346fc845bbe08adfc8ac4";
      fetch(
        `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}&lang=pl&units=I`
      )
        .then((resp) => resp.json())
        .then((respJson) => showData(respJson.data[0], latitude, longitude))
        .catch(() => console.log('Wystąpił błąd'))
    });
  }
}

const showData = (data, latitude, longitude) => {
    console.log(data);
    
  const {
    weather: { description },
    temp,
  } = data;
  const descElement = document.querySelector(".weather__summary");
  descElement.textContent = description;

  const tempElement = document.querySelector(".weather__temperature");
  tempElement.textContent = temp;

  const latitudeElement = document.querySelector(".weather__lat");
  latitudeElement.textContent = latitude;

  const longitudeElement = document.querySelector(".weather__lng");
  longitudeElement.textContent = longitude;
};
