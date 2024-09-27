document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    const latitudeInput = document.querySelector(".form__field--lat");
    const longitudeInput = document.querySelector(".form__field--lng");
    const weatherInfo = document.querySelector(".weather");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const latitude = latitudeInput.value;
        const longitude = longitudeInput.value;

        console.log("Latitude:", latitude);
        console.log("Longitude", longitude);

        if (latitude && longitude) {
            getWeather(latitude, longitude);
        } else {
            alert("Wprowadź poprawne współrzędne!");
        }
    });

    function getWeather(latitude, longitude) {
        const apiKey = "575a3496ac464d08a151ec765a4b635c";
        const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                displayWeather(data.data[0]);
            })
            .catch((error) => {
                console.error("Błąd pobierania danych:", error);
                alert("Wystąpił błąd podczas pobierania danych pogodowych.");
            });
    }

    function displayWeather(weatherData) {
        const latElement = weatherInfo.querySelector(".weather__lat");
        const lngElement = weatherInfo.querySelector(".weather__lng");
        const summaryElement = weatherInfo.querySelector(".weather__summary");
        const temperatureElement = weatherInfo.querySelector(
            ".weather__temperature"
        );
        latElement.textContent = weatherData.lat;
        lngElement.textContent = weatherData.lon;
        summaryElement.textContent = weatherData.weather.description;
        temperatureElement.textContent = weatherData.temp;
    }
});
