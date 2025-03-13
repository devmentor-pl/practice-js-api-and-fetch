document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .then(() => console.log('finish!'))
        .catch(error => {
            console.error(error);
        });


    function setBorderColorAsync(element, color) {
        return new Promise((resolve, reject) => {
            if (element && element instanceof HTMLElement) {
                setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    resolve();
                }, 3000);
            } else {
                alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
                reject();
            }
        })
    } 
}

// nie dodawałem warunku z callbackiem, bo pozbylyliśmy się ich z rozwiązania
// jeżeli takowy jest jendak potrzebny użyłbym bloku try{}...catch{} w funkcji setTimeout.