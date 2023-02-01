const apiUrl = 'https://api64.ipify.org?format=json';

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    loadData();
}

function loadData() {

    fetch(apiUrl)
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        })
        .then(data => {
            return data.ip;
        })
        .then((ip) => {

            insertData(ip);
        })
        .catch(err => console.error(err))


}

function insertData(ip) {
    const section = document.querySelector('section').children;
    const [button, span] = section;

    button.addEventListener('click', e => {
        const targetEl = e.target;

        if (targetEl.tagName === 'BUTTON') {
            renderData(span, ip);
        }
    })
}

function renderData(element, content) {
    element.innerText = content;
}

