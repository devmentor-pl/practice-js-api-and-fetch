document.addEventListener('DOMContentLoaded', init);
const api = 'https://api.ipify.org?format=json';

function init() {
    const btn = document.querySelector('button');
    if (btn) {
        btn.addEventListener('click', getIpAdress.bind(this,api));
    };
};

const getIpAdress = (api) => {
    fetch(api).then(response => {
        if (!response.ok) {
            throw new Error(`Can not get your IP`);
        };
        return response.json();
    })
    .then(data => displayIp(data.ip))
    .catch(err => alert(err.message))
    .finally(() => {console.log('done!')})
};
const displayIp = (ip) => {
    const span = document.querySelector('span');
    span.textContent = ip;
};