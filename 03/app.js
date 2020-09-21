document.addEventListener('DOMContentLoaded', init);

function init() {
    updateIP();
};


// po kliknięciu w BUTTON drugi raz otrzymuję error.
// ** Failed to execute 'text' on 'Response': body stream is locked
// at app.js: 22
// CZY to dlatego ze promise mozna skonsumowac tylko raz? jesli tak, to jak to naprawic ze kazde klikniecie bedzie mi akutualizowalo ID?

// dodaj funkcjonalnosc wielokrotnego klikania na button


function updateIP() {
    const btn = _getHTMLElement('BUTTON');
    const apiIP = fetch('https://api.ipify.org?format=json');

    btn.addEventListener('click', () => handleRequest(apiIP));
};


function handleRequest(url) {
    // location.reload();
    // return false;
    url
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.repect(resp)
        })
        .then(ip => _updateSpan(ip.ip))
        .catch(err => console.error(err));
};


function _updateSpan(ip) {
    console.log(ip)

    const span = _getHTMLElement('SPAN');
    span.innerText = `Your IP is ${ip}`;
};
function _getHTMLElement(tagName) {
    return document.querySelector(tagName);
};
function _clearSpan(element) {
    element.innerText = '';
}