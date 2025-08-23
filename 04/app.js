document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('.form');
    const latitudeInput = document.querySelector('.form__field--lat');
    const longitudeInput = document.querySelector('.form__field--lng');
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemperature = document.querySelector('.weather__temperature');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const latitudeValue = latitudeInput.value;
        const longitudeValue = longitudeInput.value;

        const apiKey = 'aefa18051aea4bee90979fa175c365c4';
        const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitudeValue}&lon=${longitudeValue}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const weather = data.data[0];

            weatherLat.textContent = latitudeValue;
            weatherLng.textContent = longitudeValue;
            weatherSummary.textContent = weather.weather.description;
            weatherTemperature.textContent = weather.temp;

        } catch (error) {
            console.error('Fetch error:', error);
            alert('Nie udało się pobrać danych pogodowych');
        }
    });
}