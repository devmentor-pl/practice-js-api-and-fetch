document.addEventListener('DOMContentLoaded', init);

class pElPlaceHolders {
    constructor(paragraphSelector = 'p') {
        this.paragraph = document.querySelector(paragraphSelector);
    }

    changePlaceHolderText(elementSelector, newText) {
        this.paragraph.querySelector(elementSelector).innerText = newText
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
        }
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
    const paragraph = new pElPlaceHolders();

    if (!isInputValueANum(lat, lng)) {
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

function isInputValueANum(...value) {
    const arr = [...value].map(val => {
        return !isNaN(val)
    })
    if (!arr.includes(false)) {
        return true
    }
}

function replaceGeogrPlaceholders(paragraph, lat, lng) {
    paragraph.changePlaceHolderText('.weather__lat', lat);
    paragraph.changePlaceHolderText('.weather__lng', lng);
}
function replaceWeatherPlaceholders(paragraph, descr, temp) {
    paragraph.changePlaceHolderText('.weather__summary', descr);
    paragraph.changePlaceHolderText('.weather__temperature', temp);
}

function fetchURLWithParameters(lat, lng) {
    const url = `https://api.weatherbit.io/v2.0/current?key=35352f1c52b84dfbb0efc4302767cf8f&lat=${lat}&lon=${lng}&units=I&lang=pl`

    const promise = fetch(url);
    return promise
}