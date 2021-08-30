document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    // setBorderColorAsync(divList[0], 'red', function() {
    //     setBorderColorAsync(divList[1], 'blue', function() {
    //         setBorderColorAsync(divList[2], 'green', function() {
    //             console.log('finish');
    //         });
    //     });
    // });
    
    setBorderColorAsync(divList[0], 'red')
    .then(() => setBorderColorAsync(divList[1], 'blue'))
    .then(() => setBorderColorAsync(divList[2], 'green'))
    .then(() => console.log('finish'))
    .catch(() => console.log('error'))


}

function setBorderColorAsync(element, color) {
   
    const promise = new Promise((resolve, reject) => {
            // sprawdzam czy parametr jest elementem DOM, więcej:
            // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
            if(element && element instanceof HTMLElement) {
                setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    resolve('smiga');
                }, Math.random() * 3000);
            } else {
                reject('Nie dziala')
            }
        })
    return promise;
}