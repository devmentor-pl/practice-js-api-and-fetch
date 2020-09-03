document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    getWeather();
};

function getWeather() {

    // get FORM data
    const form = document.querySelector('.form');

    // add listener on click on form
    form.addEventListener('submit', async event => {
        event.preventDefault();

        // get the data from form
        const fLat = form.elements[0].value;
        const fLon = form.elements[1].value;
        // const link = constructRequest(lat, lon);

        fetch(_prepUrlReq(fLat, fLon))
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    console.log('No no no no no');
                    Promise.reject(resp)
                };
            })
            .then(data => {
                const result = data.data[0];
                console.log(result);
                const desc = result.weather.description;
                const temp = result.temp;
                _updateTxtFields(fLat, fLon, desc, temp);
            })
            .catch(err => console.error(err));
    });
};


function _prepUrlReq(lat, lon) {
    const url = 'https://api.weatherbit.io/v2.0/current';
    const apiKey = 'f161d8221c87464ebd2146e8278b2892';
    const language = 'pl'
    return `${url}?lat=${lat}&lon=${lon}&key=${apiKey}&lang=${language}`;
};

function _updateTxtFields(lat, lon, des, temp) {
    const latField = document.querySelector('.weather__lat');
    const lonField = document.querySelector('.weather__lng');
    const summary = document.querySelector('.weather__summary');
    const tempField = document.querySelector('.weather__temperature');

    latField.innerText = lat;
    lonField.innerText = lon;
    summary.innerText = des;
    tempField.innerText = temp;
};