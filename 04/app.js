document.addEventListener('DOMContentLoaded', init);

function init() {
    const submit = document.querySelector('.form__submit');
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('cnbdjvb');

        event.preventDefault();
        const latitude = document.querySelector(".form__field--lat").value;
        const longitude = document.querySelector('.form__field--lng').value;
        const key = 'cf682412960844e7b87398e3c7d39536';
        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lang=pl&lat=${latitude}&lon=${longitude}`);
        //const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=cf682412960844e7b87398e3c7d39536&lang=pl&lat=52.232222&lon=21.008333`);

        promise
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                return Promise.reject(resp);
            })
            .then(ip => {
                console.log(ip.data[0])
                document.querySelector('.weather__lat').textContent = latitude;
                document.querySelector('.weather__lng').textContent = longitude;
                document.querySelector('.weather__summary').textContent = ip.data[0].weather.description;
                document.querySelector('.weather__temperature').textContent = ip.data[0].temp;

            })
            .catch(err => console.error(err));
    });
};