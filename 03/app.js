document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

const addIp = ({ip}) => {
    const spanEl = document.querySelector('span');
    spanEl.innerText = ip;
}

const getIp = () => {
    fetch('https://api.ipify.org?format=json')
        .then(response => {
            if(response.ok) {return response.json();}
            return new Promise.reject(response)
        })
        .then(ip => addIp(ip))
        .catch(error => console.error(error))
}

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', getIp);



