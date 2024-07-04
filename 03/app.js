document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const buttonEl = document.querySelector('button')

    buttonEl.addEventListener('click', () => {
        fetch('https://api.ipify.org')
            .then(resp => resp.text())
            .then(ip => updateIp(ip))
            .catch(err => console.log(err))
    }) 
    
}

function updateIp(ip) {
    const spanEl = document.querySelector('span')
    spanEl.textContent = ip
}