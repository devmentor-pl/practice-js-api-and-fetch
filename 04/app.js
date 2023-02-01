const formEl = document.querySelector('form');
const weatherData = {
    lat: '',
    lng: '',
    description: '',
    temperature: '',
    units: 'I',
    lang: 'pl',
};
const infoElement = document.querySelector('.weather');

const apiProto = {
    "data": [
        {
            "wind_cdir": "NE",
            "rh": 59,
            "pod": "d",
            "lon": -78.63861,
            "pres": 1006.6,
            "timezone": "America\/New_York",
            "ob_time": "2017-08-28 16:45",
            "country_code": "US",
            "clouds": 75,
            "vis": 10,
            "wind_spd": 6.17,
            "gust": 8,
            "wind_cdir_full": "northeast",
            "app_temp": 24.25,
            "state_code": "NC",
            "ts": 1503936000,
            "h_angle": 0,
            "dewpt": 15.65,
            "weather": {
                "icon": "c03d",
                "code": 803,
                "description": "Broken clouds"
            },
            "uv": 2,
            "aqi": 45,
            "station": "CMVN7",
            "sources": ["rtma", "CMVN7"],
            "wind_dir": 50,
            "elev_angle": 63,
            "datetime": "2017-08-28:17",
            "precip": 0,
            "ghi": 444.4,
            "dni": 500,
            "dhi": 120,
            "solar_rad": 350,
            "city_name": "Raleigh",
            "sunrise": "10:44",
            "sunset": "23:47",
            "temp": 24.19,
            "lat": 35.7721,
            "slp": 1022.2
        }
    ]
}

const apiUrl = 'https://api.weatherbit.io/v2.0/current?key=';

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    formEl.addEventListener('submit', formSubmitHandling)
}

function formSubmitHandling(e) {
    e.preventDefault();

    const errors = [];
    const fields = [
        { name: 'lat', label: 'latitude', required: true, pattern: '^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})$', },
        { name: 'lng', label: 'longitude', required: true, pattern: '^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})$', },
    ];
    const [lat, lng] = formEl;

    validateInputsData(formEl, errors, fields);
    if (errors.length === 0) {
        clearErrorList();

        weatherData.lat = lat.value;
        weatherData.lng = lng.value;

        getWeatherData();
    }
    renderErrors(errors);
}

function validateInputsData(...args) {
    const [formEl, errors, fields] = args;

    fields.forEach(field => {
        const { name, label, required, pattern } = field;

        const inputValue = formEl.elements[name].value;

        if (required) {
            if (inputValue.length === 0) {
                errors.push(`${label.toUpperCase()} is required.`);
            }
        }

        if (inputValue.length > 0 && pattern) {
            const reg = new RegExp(pattern);

            if (!reg.test(inputValue)) {
                errors.push(`Enter a valid ${label} (e.g. "52.232222") `);

            }
        }
    })
}

function renderErrors(errors) {
    if (errors.length !== 0) {
        renderFormErrors(errors);
        renderSectionError();
    }
}

function renderFormErrors(errors) {
    clearErrorList();
    const errorsList = createList(errors, 'form__errors-list', 'form__errors-list-item');
    formEl.insertBefore(errorsList, formEl.lastElementChild);
}

function renderSectionError() {
    infoElement.children[0].style.display = 'none';
    const errorEl = createElement('p', 'weather__error');

    errorEl.innerText = 'Input valid data.';
    infoElement.appendChild(errorEl);
}

function clearErrorList() {

    infoElement.children[0].style.display = 'block';

    removeElement(infoElement, '.weather__error')
    removeElement(formEl, '.form__errors-list');
}

function getWeatherData() {
    const { lat, lng } = weatherData;
    const url = `${apiUrl}&lat=${lat}&lon=${lng}`

    return new Promise((resolve, reject) => {
        resolve(apiProto.data[0])
    })
        .then(data => {
            console.log(data);
            setTimeout(() => {
                const { temp, weather: { description } } = data;
                weatherData.temperature = temp;
                weatherData.description = description;
                renderData()
            }, 0);
            // console.log(temp, description);
            // console.log(data.weather.description);

        })
}

function renderData() {
    const [element] = infoElement.children;
    const [latEl, lngEl, descriptionEl, temperatureEl] = element.children;
    const { lat, lng, description, temperature } = weatherData;

    latEl.innerText = lat;
    lngEl.innerText = lng;
    descriptionEl.innerText = description;
    temperatureEl.innerText = temperature;
}

function createList(itemsContent, listClass, itemClass) {
    const listEl = createElement('ul', listClass);

    itemsContent.forEach((itemContent) => {
        const listItem = createElement('li', itemClass);

        listItem.innerText = itemContent;

        listEl.appendChild(listItem);
    });

    return listEl;
}

function createElement(element, className) {
    const newElement = document.createElement(element);

    newElement.classList.add(className);

    return newElement;
}

function removeElement(parentEl, selectorToRemove) {
    const elementToRemove = parentEl.querySelector(selectorToRemove);

    if (elementToRemove) parentEl.removeChild(elementToRemove);
}