const init = () => {
    console.log('DOM');
    const btn = document.querySelector('button');
    btn.addEventListener('click', getIP)
}

const getIP = () => {
    const promise = fetch('https://api.ipify.org?format=json');
    promise
    .then(resp => {
        if (resp.ok) {return resp.json(); }
        return Promise.reject(resp);
    })
    .then(ip => showIP(ip))
    .catch(err => console.log(err))
    .finally( () => console.log('IP address downloaded successfully'))
}

function showIP(ip) {
    const spanEl = document.querySelector('span');
    const ipAddress = ip.ip;
    spanEl.innerText = ipAddress;
}

document.addEventListener('DOMContentLoaded', init);