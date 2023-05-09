document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const btnEl = document.querySelector('button');
    const spanEl = document.querySelector('span');

    if(btnEl){
        btnEl.addEventListener('click', getIp())
    }
    function getIp(){
        fetch('https://api.ipify.org?format=json')
        .then (resp => {
            if(resp.ok){
                return resp.json()
            }
        }).then(data => {
            if(spanEl){
                spanEl.innerText = data.ip
            }else{
                console.error('Nie mogę znaleźć elementu!')
            }
        }).catch(err => console.log('Nie mogę pobrać danych.', err))
    }
}
