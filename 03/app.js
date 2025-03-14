document.addEventListener('DOMContentLoaded', init);

function init() {
    const getApiButton = document.querySelector('button');
    const displaySpan = document.querySelector('span');

    getApiButton.addEventListener('click', function() {
        fetch('https://cors-anywhere.herokuapp.com/http://ip-api.com/json')
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                displaySpan.textContent = data.query;
            })
            .catch(error => {
                console.log('Problem with operation: ', error);
            });
    });
}