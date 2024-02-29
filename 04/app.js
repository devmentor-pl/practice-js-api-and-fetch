document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('DOM');
  const formEl = document.querySelector('.form')
  const latEl = formEl.querySelector('.form__field--lat')
  const longEl = formEl.querySelector('.form__field--lng')
  const inputSubmit = formEl.querySelector('.form__submit') 
  
  inputSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const lat = latEl.value
    const long = longEl.value
    if(isNaN(lat) || isNaN(long)) {
      return alert('wprowadź poprawne wartości dla szer. i dł. geograficznej!');
    }
    checkWeatherAPI(lat, long)
    clearInputs(latEl, longEl)
  })
    
}

const checkWeatherAPI = (lat, long) => {
  const API_KEY = '96403ac17bae4badaa18145765aab597'
  const urlAddress = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&lat=${lat}&lon=${long}`

  const promise = fetch(urlAddress)
  
  promise
    .then(resp => {
      if(resp.ok) {
        return resp.json()
      }
      return Promise.reject(resp)
    })
    .then(data => {
      renderWeaterDescription(data, lat, long)
    })
    .catch(err => console.log(err))
    .finally(() => {
      console.log('Fetch API done')
    })

  
}

const changeCtoF = (tempInC) => {
  return Number((tempInC * 1.8) + 32).toFixed(1)
}

const renderWeaterDescription = (respObj) => {

  const sectionEl = document.querySelector('.weather')
  sectionEl
  const sectionLat = sectionEl.querySelector('.weather__lat')
  const sectionLong = sectionEl.querySelector('.weather__lng')
  const weatherDescription = sectionEl.querySelector('.weather__summary')
  const temp = sectionEl.querySelector('.weather__temperature')

  const { lat, lon, app_temp } = respObj.data[0]
  const { description } = respObj.data[0].weather

  sectionLat.innerText = lat
  sectionLong.innerText = lon
  weatherDescription.innerText = description
  let tempInF = changeCtoF (app_temp)
  temp.innerHTML = tempInF

  console.dir(respObj)
  
}

const clearInputs = (lat, long) => {
  lat.value = ''
  long.value = ''
}







