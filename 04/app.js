document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    //FORM
    const formEl = document.querySelector('.form')
    const latInput = document.querySelector('.form__field--lat')
    const latInputValue = latInput.value
    // console.log(latInputValue)
    const longtInput = document.querySelector('.form__field--lng')
    const longtInputValue = longtInput.value
    // console.log(longtInputValue)
    const submitBtn = document.querySelector('.form__submit')

    //WEATHER SECTION
    const latArea = document.querySelector('.weather__lat')
    const longArea = document.querySelector('.weather__lng')
    const weatherType = document.querySelector('.weather__summary')
    const weatherTemp = document.querySelector('.weather__temperature')

    
    
    const submitFn = (e) => {
        e.preventDefault()
        console.log('submit ok');

        latArea.innerText = latInputValue
        longArea.innerText = longtInputValue




    }
    
    formEl.addEventListener('submit', submitFn)
}