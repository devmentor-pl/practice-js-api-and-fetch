document.addEventListener('DOMContentLoaded', init);
const apiUrl = "https://api.weatherbit.io/v2.0/current"
const apiKey = "Enter your API KEY"
const errors = []
function init() {
    console.log('DOM');
    getDatafromForm();
}

function getDatafromForm() {
    const form = document.querySelector(".form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const data = {
            isValid: true,
        };

        const inputArr = [...e.target].slice(0, 2);
        errors.length = 0;
        inputArr.forEach(input => {
            if (isValidInput(input)) {
                const key = [...input.classList]
                    .find(cls => cls.startsWith("form__field--"))
                    .split("--")[1];
                data[key] = Number(input.value);
            } else {
                data.isValid = false;
                displayError();
            }
        })
        if (data.isValid) { loadWetherData(data) };

    });

}

function displayError() {
    const weatherEl = document.querySelector(".weather");
    weatherEl.innerHTML = "";
    const errorMessageUl = document.createElement("ul");
    errors.forEach(err => {
        const errLi = document.createElement("li");
        errLi.innerText = err;
        errorMessageUl.appendChild(errLi);
    });
    weatherEl.appendChild(errorMessageUl);
}

function isValidInput(input) {
    const inputValue = input.value;
    if (input.value.trim() === "") {
        errors.push("Input is empty.");
        return false;
    }
    if (isNaN(Number(inputValue))) {
        errors.push("Please enter valid Input (Numbers)");
        return false;
    }
    return true;
}

async function loadWetherData(obj) {
    const { lat, lng } = obj;
    const url = new URL(apiUrl);
    url.search = new URLSearchParams({
        key: apiKey,
        lat: lat,
        lon: lng,
        lang: "pl"
    });

    fetch(url)
        .then(resp => {
            if (!resp.ok) { throw new Error(`HTTP error! status: ${resp.status}`) };
            return resp.json()
        })
        .then(data => {
            console.log(data.data[0]);
            displyWeather(data.data[0])
        })
        .catch(err => console.error(err));

    console.log(url);


}

function displyWeather(obj) {
    const { lat, lon, temp, weather } = obj
    const weatherEl = document.querySelector(".weather")
    weatherEl.innerHTML = `
     <p>Pogodę w obecnej chwili w miejscu o szerokości geograficznej: <strong class="weather__lat">${lat}</strong> i
            długości geograficznej: <strong class="weather__lng">${lon}</strong> można określić jako: <strong
                class="weather__summary">${weather.description}</strong>, gdzie temperatura wynosi: <strong
                class="weather__temperature">${temp}</strong>°C;
    </p>
    `

}

