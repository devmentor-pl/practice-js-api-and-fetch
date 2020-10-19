document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    getWeather();
}

function getWeather() {


    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      console.log('form załadowany')

     const latitudeValue = form.elements[0].value;
    //  console.log(latitudeValue)

     const longitudeValue = form.elements[1].value;
    //  console.log(longitudeValue)
     
     const weatherLat = document.querySelector('.weather__lat');
    //  console.log(weatherLat)
     const weatherLng = document.querySelector('.weather__lng');
    //  console.log(weatherLng)

    weatherLng.innerHTML = longitudeValue;
    weatherLat.innerHTML = latitudeValue;

showInfo(latitudeValue, longitudeValue)

})
}

function showInfo(latitudeValue, longitudeValue) {
  const key = '9c92db0bd6c3430aba24bb046c07b6f8';
  const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitudeValue}&lon=${longitudeValue}`)


  const weatherSummary = document.querySelector('.weather__summary');
  const weatherTemp = document.querySelector('.weather__temperature');



promise
.then(resp => resp.json()) 
.then(resp=> {
  const temperature = resp.data[0].temp;
    console.log(temperature)
    const description  = resp.data[0].weather.description;
    console.log(temperature, description) 
    weatherSummary.innerText = description;
    weatherTemp.innerText = temperature;
})
.catch(err => console.error(err))
.finally(() => {
console.log('Odpytywanie API zakończone!')
 });



  
}

