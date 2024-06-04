document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const formEl = document.querySelector('.form')
    const latInput = document.querySelector('.form__field--lat')
    const longtInput = document.querySelector('.form__field--lng')
    const submitBtn = document.querySelector('.form__submit')

    const latArea = document.querySelector('.weather__lat')
    const longArea = document.querySelector('.weather__lng')
    const weatherType = document.querySelector('.weather__summary')
    const weatherTemp = document.querySelector('.weather__temperature')

}