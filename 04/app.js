document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const form = document.querySelector(".form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        showWeather();
    })

}

const getApi = async () => {
    const key = "ac75487856384e5bb2c9189230278b45";
    const url = "https://api.weatherbit.io/v2.0/current?";
    const lat = document.querySelector(".form__field--lat");
    const lng = document.querySelector(".form__field--lng");
    const latValue = lat.value;
    const lngValue = lng.value;

    try {
        const response = await fetch(`${url}key=${key}&lat=${latValue}&lon=${lngValue}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        const temp = data.data[0].temp;;
        const description = data.data[0].weather.description
        return { temp, description }
    } catch (error) {
        console.error(error);
    }
}

const showWeather = async () => {
    const weatherData = await getApi();
    const lat = document.querySelector(".form__field--lat");
    const lng = document.querySelector(".form__field--lng");

    if (weatherData) {
        const { temp, description } = weatherData;
        document.querySelector(".weather__temperature").textContent = `${temp}`;
        document.querySelector(".weather__summary").textContent = `${description}`;
        document.querySelector(".weather__lat").textContent = `${lat.value}`;
        document.querySelector(".weather__lng").textContent = `${lng.value}`;
    }
}