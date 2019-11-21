document.addEventListener('DOMContentLoaded', init);

function init() {

    console.log('DOM');
    const button = document.querySelector('button');
    button.addEventListener('click', clickHandler);
}

function clickHandler(e){
    
    const promise = fetch('https://api.ipify.org?format=json');

    promise
        .then(resp =>{
            if(resp){
                return resp.text();
            }

            return Promise.reject(resp);
        })

        .then(ip => diplayIp(ip))
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
        });

}

function diplayIp(jsonIP){
    const spanElement = document.querySelector('span');
    const jsonObj = JSON.parse(jsonIP);
    spanElement.textContent = jsonObj.ip;
}