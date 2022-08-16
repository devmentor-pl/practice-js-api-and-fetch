document.addEventListener('DOMContentLoaded', init);

function init() {
    const apiKey = '2eaeecb2e4474deea60efff2e268070a';
    const formElement = document.querySelector('.form');
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLon = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemp = document.querySelector('.weather__temperature');
    const weatherContainer = document.querySelector('.weather');
    const errorMessageElement = document.createElement('p');
    weatherContainer.appendChild(errorMessageElement);

    if (formElement) {
        formElement.addEventListener(
            'submit',
            handleSubmit
        );
    };

    function handleSubmit(e) {
        e.preventDefault();
        const [latInput, lonInput] = e.target.elements;
        if (errorMessageElement) {
            cleanErrorMessageContainer();
        };
        setEmptyCoords();
        weatherLat.innerText = latInput.value;
        weatherLon.innerText = lonInput.value;

        if (latInput.value === '' || lonInput.value === '') {
            errorMessageElement.innerText = 'Wprowadzono błędne współrzędne!';
            errorMessageElement.style.color = 'red';
            setEmptyCoords();
        } else {
            fetch(`https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latInput.value}&lon=${lonInput.value}&units=I&lang=PL`)
                .then(response => response.json())
                .then(data => {
                    weatherSummary.innerText = data.data[0].weather.description;
                    weatherTemp.innerText = data.data[0].temp;
                })
                .catch(error => console.error(error));
        };
    };

    function cleanErrorMessageContainer() {
        errorMessageElement.innerText = '';
    };

    function setEmptyCoords() {
        weatherLat.innerText = 'XXX';
        weatherLon.innerText = 'YYY';
    };
};