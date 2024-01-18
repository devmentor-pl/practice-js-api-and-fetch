document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const formEl = document.querySelector('.form')
    const latEl = document.querySelector('.weather__lat')
    const lngEl = document.querySelector('.weather__lng')
    const summaryEl = document.querySelector('.weather__summary')
    const temperatureEl = document.querySelector('.weather__temperature')
    if(formEl){
        formEl.addEventListener('submit', handleSubmit)
    }

    function handleSubmit(element) {
        element.preventDefault()

        console.log('submit', element.target.elements)

        const [lat, lng] = element.target.elements

        latEl.innerText = lat.value
        lngEl.innerText = lng.value

        const key = '22f2185367464752a11e6f311e83a044'
        fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat.value}&lon=${lng.value}&units=I&lang=pl`)
    
        .then(resp => {
            if(resp.ok) {
                return resp.json()
            }   
        }).then(data => {
            
                console.log(data)

                summaryEl.innerText = data.data[0].weather.description
                temperatureEl.innerText = data.data[0].temp
        
        })
        .catch(err => console.log('I can not download data', err))


    }



}