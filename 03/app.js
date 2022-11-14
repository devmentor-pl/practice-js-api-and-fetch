document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

const clickBtn = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', getApi)
}

const getApi = () => {
    const promise = fetch('https://api.ipify.org?format=json');

    promise
        .then (resp => {
            if(resp.ok) { return resp.json() }
            return Promise.reject(resp);
        })
        .then( ip => showIP(ip) )
        .catch( err => console.error(err) )
        .finally( () => console.log ('Odpytywanie API zakończone!'))
}

const showIP = ip => {
    const spanEl = document.querySelector('span');
    const ipEl = ip.ip
    spanEl.innerText = ipEl;
}
   
document.addEventListener('DOMContentLoaded', clickBtn);