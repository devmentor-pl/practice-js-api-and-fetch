document.addEventListener('DOMContentLoaded', init);
const btn = document.querySelector('button');
btn.addEventListener('click', showIp);

function init() {
    console.log('DOM');
}

function showIp(){

    const promise = fetch('https://api.ipify.org?format=json');

    promise
    .then(resp => {
        if (resp.ok){
            return resp.json();
        }

        return Promise.reject(resp);
    })
    .then(data => {
        // console.log(data.ip);
        const yourIp = document.querySelector('span');
        yourIp.textContent = data.ip;
    })
    .catch(err => console.error(err))
    .finally(() => console.log('Zakonczono odpytywanie API'));
}



