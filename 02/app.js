document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    

    setBorderColorAsync(divList[0], 'red')
    .then(resp => {setBorderColorAsync(divList[1], 'blue')})
    .then(resp => {setBorderColorAsync(divList[2], 'green')})
    .finally(() => {console.log('Finish')
    })
    // setBorderColorAsync(divList[0], 'red', function() {
    //     setBorderColorAsync(divList[1], 'blue', function() {
    //         setBorderColorAsync(divList[2], 'green', function() {
    //             console.log('finish');
    //         });
    //     });
    // });

}

function setBorderColorAsync(element, color, callback) {
    const promise = new Promise(function(resolve,reject) {
    if(element && element instanceof HTMLElement) {
        // sprawdzam czy parametr jest elementem DOM, więcej:
        // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        
        if(callback && typeof callback === 'function') {
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                callback();
            }, Math.random() * 3000);
            resolve();
        } else {
            reject('Parametr ~callback~ mus być funkcją');
        }
    } else {
        alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
    }
})
return promise;
}