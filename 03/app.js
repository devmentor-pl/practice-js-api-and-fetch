document.addEventListener('DOMContentLoaded', init);
const btn = document.querySelector('button');
// console.log(spanIP)
// console.log(btn)

function init() {
    console.log('DOM');
    function clickButton()  {
        const spanIP = document.querySelector('span');
    
        const promise = fetch(
             'https://api.ipify.org?format=json'
             );
             promise
             .then(resp => {
             if(resp.ok) { return resp.json(); 
    
            }
             return Promise.reject(resp);})
                .then((ip)=> {
                 spanIP.innerText = ip.ip;
                })
                .catch(err => console.error(err))
                .finally(() => {
                console.log('Odpytywanie API zakończone!')
                });
    }
    btn.addEventListener('click', clickButton)
}


