const init = () => {
    const button = document.querySelector('button');
    button.addEventListener('click' , getIPAdress)
}

const getIPAdress = () => {

    const promise = fetch('https://api64.ipify.org?format=json');

    promise
    .then( resp => {
        if(resp.ok) { return resp.json() }
        return Promise.reject(resp);
    })
    .then( ip => showIPAdress(ip) )
    .catch( err => console.log(err) )
    .finally( () => console.log('Odpytywanie API zakończone'))
}


const showIPAdress = ip => {
    const span = document.querySelector('span');
    const ipAdress = ip.ip
    span.innerText = ipAdress;
}


document.addEventListener('DOMContentLoaded', init);