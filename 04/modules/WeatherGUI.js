class WeatherGUI {
    constructor(api) {
        this.api = api;
        this.formEl = document.querySelector('.form');
        this.weatherInfoElement = document.querySelector('.weather');
    }

    init() {
        this.initEvents();
    }

    initEvents() {
        this.formEl.addEventListener('submit', e => this.handleFormSubmit(e));
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const errors = [];

        this.validateInputsData(errors);

        if (this.isElementEmpty(errors)) {
            const { lat, lng } = this.formEl.elements;
            const geoCoords = {
                lat: lat.value,
                lng: lng.value,
            }

            this.sendToApi(geoCoords)
            this.loadApiData();
            this.clearErrorsList();
        }

        this.renderErrors(errors);
    }

    validateInputsData(errors) {
        const fields = [
            { name: 'lat', label: 'latitude', required: true, pattern: '^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})$', },
            { name: 'lng', label: 'longitude', required: true, pattern: '^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})$', },
        ];

        fields.forEach(field => {
            const { name, label, required, pattern } = field;

            const inputValue = this.formEl.elements[name].value;

            if (required) {
                if (this.isElementEmpty(inputValue)) {
                    errors.push(`Pole ${label.toUpperCase()} jest wymagane.`);
                }
            }
            if (inputValue.length > 0 && pattern) {
                if (this.isNotValidPattern(pattern, inputValue)) {
                    errors.push(`Wprowadź poprawną wartość w polu ${label} (np. "52.232222").`);
                }
            }
        })
    }

    isNotValidPattern(pattern, inputValue) {
        const reg = new RegExp(pattern);
        if (!reg.test(inputValue)) { return true }
    }

    sendToApi(data) {
        this.api.getGeoCoords(data);
    }

    loadApiData() {
        this.api.loadData()
            .then(data => this.insertData(data))
            .catch(err => console.error(err));
    }

    insertData(weatherData) {
        const { lon, lat, temp, city_name, weather: { description } } = weatherData;
        const [parentEl] = this.weatherInfoElement.children;
        const [latEl, lngEl, cityEl, descriptionEl, temperatureEl] = parentEl.children;

        const infoElementsArr = [
            { element: latEl, text: lat },
            { element: lngEl, text: lon },
            { element: cityEl, text: `${city_name}` },
            { element: descriptionEl, text: description },
            { element: temperatureEl, text: temp },
        ];

        this.renderWeatherData(infoElementsArr);
    }

    renderWeatherData(infoElementsArr) {
        infoElementsArr.forEach(infoElement => {
            const { element, text } = infoElement;

            element.innerText = text;
        });
    }

    renderErrors(errors) {
        if (!this.isElementEmpty(errors)) {


            this.renderFormErrors(errors);
            this.renderSectionError();
        }
    }

    renderFormErrors(errors) {
        const errorsList = this.createList(errors, 'form__errors-list', 'form__errors-list-item');
        errorsList.style.color = 'red';
        errorsList.style.listStyle = 'none';

        this.clearErrorsList();

        this.formEl.insertBefore(errorsList, this.formEl.lastElementChild);
    }

    renderSectionError() {
        const errorEl = this.createElement('p', 'weather__error');
        const [weatherInfoParagraph,] = this.weatherInfoElement.children;

        weatherInfoParagraph.style.display = 'none';

        errorEl.innerText = 'Wprowadź poprawne dane i spróbuj ponownie.';
        this.weatherInfoElement.appendChild(errorEl);
    }

    clearErrorsList() {
        const [weatherInfoParagraph,] = this.weatherInfoElement.children;

        weatherInfoParagraph.style.display = 'block';

        this.removeElement(this.weatherInfoElement, '.weather__error')
        this.removeElement(this.formEl, '.form__errors-list');
    }

    isElementEmpty(element) {
        if (element.length === 0) return true;
    }

    createList(itemsContent, listClass, itemClass) {
        const listEl = this.createElement('ul', listClass);

        itemsContent.forEach((itemContent) => {
            const listItem = this.createElement('li', itemClass);

            listItem.innerText = itemContent;

            listEl.appendChild(listItem);
        });

        return listEl;
    }

    createElement(element, className) {
        const newElement = document.createElement(element);

        newElement.classList.add(className);

        return newElement;
    }

    removeElement(parentEl, selectorToRemove) {
        const elementToRemove = parentEl.querySelector(selectorToRemove);

        if (elementToRemove) parentEl.removeChild(elementToRemove);
    }

}

export default WeatherGUI;