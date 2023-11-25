document.addEventListener('DOMContentLoaded', init);

function init() {

  const form = document.querySelector('.form');
  form.addEventListener('submit', handleSubmit);

  console.log('DOM');
}

function handleSubmit(event) {
  event.preventDefault();

  const latitudeInput = document.querySelector('.form__field--lat').value;
  const longitudeInput = document.querySelector('.form__field--lng').value;

  const latitude = latitudeInput.value;
  const longitude = longitudeInput.value;


  console.log('Latitude:', latitude);
  console.log('Longitude:', longitude);


  if (isNaN(latitude) || isNaN(longitude)) {
    alert('Wprowadź poprawne współrzędne (liczby).');
    return;
  }


  const apiKey = '7d52688e95b94d259f3f5de564f5362c';


  const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}`;


  fetch(apiUrl)
    .then(resp => {

      if (resp.ok) {
        return response.json();
      }

    })
    .then(data => {

      updateData(data);
    })
    .catch(error => {
      console.error('Wystąpił błąd:', error);
    });
}


function updateData(data) {
  const latElement = document.querySelector('.weather__lat');
  const lngElement = document.querySelector('.weather__lng');
  const summaryElement = document.querySelector('.weather__summary');
  const temperatureElement = document.querySelector('.weather__temperature');

  latElement.textContent = data.data[0].lat;
  lngElement.textContent = data.data[0].lon;
  summaryElement.textContent = data.data[0].weather.description;
  temperatureElement.textContent = data.data[0].temp;
}

