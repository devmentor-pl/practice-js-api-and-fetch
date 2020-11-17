document.addEventListener('DOMContentLoaded', init);



function init() {
    console.log('DOM');

    const form = document.querySelector('.form');

    form.addEventListener('submit', (e) => {
        let coords = prepareData(e);
        const [lat, long] = coords;
        downloadData(lat, long);
    });

}

const prepareData = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('.form__field');
    let [latInput, longInput] = inputs;

    const lat = parseFloat(latInput.value);
    const long = parseFloat(longInput.value);

    if (!isNaN(lat) && !isNaN(long)) {
        return [lat, long];
    } else {
        alert('Podaj prawidłowe współrzędne!');
        return;
    }
}

const downloadData = (lat, long) => {
    const key = `21e8e9f495af448cab8a8ba9da998436`;
    const lang = `pl`;
    const unit = 'I'

    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${long}&lang=${lang}&units=${unit}`);

    promise.then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        })
        .then(data => printData(data.data[0]))
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Finished')
        })

    return promise;
}

const printData = (data) => {
    const spanLat = document.querySelector('.weather__lat');
    const spanLong = document.querySelector('.weather__lng');
    const spanSummary = document.querySelector('.weather__summary');
    const spanTemp = document.querySelector('.weather__temperature');
    console.log(data);
    spanLat.textContent = data.lat;
    spanLong.textContent = data.lon;
    spanSummary.textContent = data.weather.description;
    spanTemp.textContent = data.temp;
}