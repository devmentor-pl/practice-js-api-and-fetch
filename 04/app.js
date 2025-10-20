document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const latField = document.querySelector('.form__field--lat');
    const lngField = document.querySelector('.form__field--lng');

    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemperature = document.querySelector('.weather__temperature');

    const API_KEY = '5319c10e499e4b428f284414d65e0c4f'; 

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const lat = latField.value.trim();
        const lng = lngField.value.trim();

        if (!lat || !lng) {
            alert('Podaj obie współrzędne!');
            return;
        }

        const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${API_KEY}&lang=pl`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Błąd sieci!');

            const data = await response.json();
            const weather = data.data[0];

            
            weatherLat.textContent = lat;
            weatherLng.textContent = lng;
            weatherSummary.textContent = weather.weather.description;
            weatherTemperature.textContent = weather.temp;

        } catch (err) {
            console.error(err);
            alert('Nie udało się pobrać danych o pogodzie.');
        }
    });
});