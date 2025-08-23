document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

}

function getWeather() {
    const latitude = document.querySelector('.form__field--lat').value;
    const longitude = document.querySelector('.form__field--lng').value;

    const apiKey = '1cf960940d5c40e6a526a70d47722855';
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}&lang=pl`;

    fetch(apiUrl)
        .then(resp => resp.json())
        .then(data => {
            document.querySelector('.weather__lat').textContent = latitude;
            document.querySelector('.weather__lng').textContent = longitude;
            document.querySelector('.weather__summary').textContent = data.data[0].weather.description;
            document.querySelector('.weather__temperature').textContent = data.data[0].temp;
        })
        .catch(err => console.error('błąd'))
}
document.querySelector('.form').addEventListener('submit', (event)=> {
    event.preventDefault();
    getWeather();
});
