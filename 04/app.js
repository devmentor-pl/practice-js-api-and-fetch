document.addEventListener('DOMContentLoaded', init);

class DOMHelper {
    constructor(selector = 'p') {
        this.root = document.querySelector(selector);
    }

    changeElementText(elementSelector, newText) {
        this.root.querySelector(elementSelector).innerText = newText
    }
}
class FormElements {
    constructor(formSelector = '.form') {
        this.form = document.querySelector(formSelector);
    }

    getFormElementValue(elementSelector) {
        const formEl = this.form.querySelector(elementSelector);
        if (formEl) {
            return formEl.value
        } else { return null }
    }
}

function init() {
    const formEl = new FormElements();
    formEl.form.addEventListener('submit', getInputValues);
}

function getInputValues(e) {
    e.preventDefault();
    const form = new FormElements();
    const lat = form.getFormElementValue('.form__field--lat');
    const lng = form.getFormElementValue('.form__field--lng');
    const paragraph = new DOMHelper();

    if (!areCorrectNums(lat, lng)) {
        return alert('Proszę wprowadzić tylko liczby')
    }

    if (paragraph && lat && lng) {
        replaceGeogrPlaceholders(paragraph, lat, lng)

        fetchURLWithParameters(lat, lng)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(res => {
                const data = res.data[0]
                const temp = data.temp;
                const descr = data.weather.description;
                replaceWeatherPlaceholders(paragraph, descr, temp)
            })
            .catch(err => console.error(err))
    }
}

function areCorrectNums(...value) {
    return [...value].every(val => !isNaN(val))
}

function replaceGeogrPlaceholders(paragraph, lat, lng) {
    paragraph.changeElementText('.weather__lat', lat);
    paragraph.changeElementText('.weather__lng', lng);
}
function replaceWeatherPlaceholders(paragraph, descr, temp) {
    paragraph.changeElementText('.weather__summary', descr);
    paragraph.changeElementText('.weather__temperature', temp);
}

function fetchURLWithParameters(lat, lng) {
    const url = `https://api.weatherbit.io/v2.0/current?key=35352f1c52b84dfbb0efc4302767cf8f&lat=${lat}&lon=${lng}&units=I&lang=pl`

    const promise = fetch(url);
    return promise
}