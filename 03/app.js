document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const btn = document.querySelector('button');
    const span = document.querySelector('span');

    const getIP = () => {
        const url = 'https://api.ipify.org?format=json';
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => span.textContent = json.ip)
            .catch(err => console.log(err))
    }
    btn.addEventListener('click', getIP);
}