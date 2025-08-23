document.addEventListener('DOMContentLoaded', init);
const btn = document.querySelector('button')

function init() {
    console.log('DOM');
}

function updateIP(ipData) {
    btn.addEventListener('click', ()=>{
        const span = document.querySelector('span')
        span.innerText = ipData
    })
}

function getIP() {
    const promise = fetch('https://api.ipify.org?format=json');

        promise
            .then(resp => {
                if(resp.ok) { return resp.json()}
                
                return Promise.reject(resp);
                })
            .then(data => updateIP(data.ip))
            .catch(err => console.error(err))
            .finally(() => {
            console.log('Odpytywanie API zakończone!',)
        });
}

btn.addEventListener('click', (IP)=>{
    getIP()
    const span = document.querySelector('span')
    span.innerText = IP
})

