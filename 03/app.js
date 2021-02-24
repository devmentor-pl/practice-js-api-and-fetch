document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    
    
    const button = document.querySelector('button');

    button.addEventListener('click', getData);
}


function getData() {
    const promise = fetch('https://api.ipify.org?format=json');
    promise
    .then((resp) => {
        if(resp.ok) {
            return resp.json();
        }
        return Promise.reject(resp);
    })
    .then((ip) => {
        const spanElement = document.querySelector('span');
        spanElement.innerText = ip.ip;
    })
    .catch(err => {console.log(err)})
    .finally(() => {
        console.log('Done');
    });

    return promise;
}