const button = document.querySelector('button');
const ipSpan = document.querySelector('span');

document.addEventListener('DOMContentLoaded', init);
button.addEventListener('click', clickHandler);

function init() {
    console.log('DOM');
}
function clickHandler(){

    const promise = fetch('https://api.ipify.org?format=json');
    
    promise
        .then(resp => {
            if(resp.ok){
                return resp.json();
            }
            return Promise.reject(resp);
        })
        .then(resp => {
            ipSpan.innerText = resp.ip;
        })
        .catch(err => console.log(err));
}

