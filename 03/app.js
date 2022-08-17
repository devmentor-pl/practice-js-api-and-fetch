document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

const button = document.querySelector('button')
const span = document.querySelector('span')
button.addEventListener('click', findIP)

function findIP(){
    const options = { method: 'GET'}
    const promise = fetch('https://api.ipify.org?format=json', options)

    promise
        .then(resp => {
            if(resp.ok) { return resp.json();}
        })
        .then(data => span.innerText = data.ip)
        .catch(err => console.log(err))
        .finally(() => {
            console.log('Done')
        })
}