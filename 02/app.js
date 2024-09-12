document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red', function(){})
        .then(resp => setBorderColorAsync(divList[1], 'blue', function(){}))
        .then(resp => setBorderColorAsync(divList[2], 'green', function(){}))
        .then(resp => console.log('finish'))
        .catch(err => console.error(err));
}

function setBorderColorAsync(element, color, callback) {
       
    if(element && element instanceof HTMLElement) {
        // sprawdzam czy parametr jest elementem DOM, więcej:
        // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        const promise = new Promise ((resolve, reject) => {
        
                setTimeout(() => {
                    if(callback && typeof callback === 'function') {resolve (
                    element.style.border = `3px solid ${color}`,
                    callback());}
                    else {reject (alert('Parametr ~callback~ musi być funkcją'));}
                }, Math.random() * 3000);
        });
        return promise;
    } else {
        alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
    }   
}

    


/*function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', function() {
        setBorderColorAsync(divList[1], 'blue', function() {
            setBorderColorAsync(divList[2], 'green', function() {
                console.log('finish');
            });
        });
    });

}

function setBorderColorAsync(element, color, callback) {
    if(element && element instanceof HTMLElement) {
        // sprawdzam czy parametr jest elementem DOM, więcej:
        // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        
        if(callback && typeof callback === 'function') {
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                callback();
            }, Math.random() * 3000);
        } else {
            alert('Parametr ~callback~ musi być funkcją');
        }
    } else {
        alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
    }
}*/