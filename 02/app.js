document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = _getDivs();
    
    setBorderColorAsync(divList[0], 'red', function () {
        setBorderColorAsync(divList[1], 'blue', function () {
            setBorderColorAsync(divList[2], 'green', function () {
                console.log('finish');
            });
        });
    });
};

function setBorderColorAsync(element, color, callback) {

    const promka = new Promise((resolve, reject) => {

        if (element && element instanceof HTMLElement) {

            if (callback && typeof callback === 'function') {
                resolve(setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    callback();
                }, Math.random() * 3000));
            } else {
                reject('Parametr ~callback~ mus być funkcją');
            };
        } else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        };
    });

    promka.then(respond => console.log(respond))
        .catch(err => console.error(err))
};

function _getDivs() {
    return document.querySelectorAll('div');
};
