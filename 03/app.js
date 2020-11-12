document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    getIP();
}

function getIP() {
    const button = document.querySelector('button')
    const span = document.querySelector('span')

    button.addEventListener('click', () => {
        fetch('https://api.ipify.org?format=json')
            .then( resp => resp.json() )
            .then( jsonObj => span.innerText = jsonObj.ip )
            .catch( err => span.innerText = err )
    })
}