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
    const apiIP = fetch('https://api.wheretheiss.at/v1/satellites/25544');

    btn.addEventListener('click', () => handleRequest(apiIP));
};


async function handleRequest(url) {
    // location.reload();
    // return false;
    url
        .then(resp => {
            if (resp.ok) {
                console.log(resp);
            }
            return Promise.reject(resp)
        })
        .then(ip => _updateSpan(ip))
        .catch(err => console.error(err));
};


function _updateSpan(ip) {
    const span = _getHTMLElement('SPAN');
    span.innerText = ip;
};
function _getHTMLElement(tagName) {
    return document.querySelector(tagName);
};
function _clearSpan(element) {
    element.innerText = '';
}