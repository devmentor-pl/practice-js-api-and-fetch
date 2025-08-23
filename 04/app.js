document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOMki');
    getWeatherAtCoordinates();
}

function getWeatherAtCoordinates() {
    const formElement = document.querySelector('.form');
    const apiKey = '519b1b718b664f9c835b63fac827eef9'
    const fields = formElement.elements;
    formElement.addEventListener('submit', handleCoordSubmit)
    


    function handleCoordSubmit (e) {
        e.preventDefault();
        getServerResponse()
    }

    function getServerResponse () {
        const formData = {
            latitude: fields[0].value,
            longitude: fields[1].value
        }
        fetch(`https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${formData.latitude}&lon=${formData.longitude}&lang=pl&units=I`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return Promise.reject(response)
            })
            .then(weather => insertWeatherData((weather.data[0].weather.description), (weather.data[0].temp), formData))
            .catch(err => console.log(err))
            .finally(()=> console.log('Odpytywanie zakończone!'))
    }


    function insertWeatherData(weatherSummary, weatherTemp, formData) {
        const strongTextElements = document.querySelectorAll(".weather__lat, .weather__lng, .weather__summary, .weather__temperature");
        const weatherData = [
                formData.latitude,
                formData.longitude,
                weatherSummary,
                weatherTemp
            ];

        for(let i=0; i<strongTextElements.length; i++) {
            strongTextElements[i].innerText = weatherData[i]
        }
    }
    
}









