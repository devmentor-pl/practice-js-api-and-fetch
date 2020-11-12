document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red')
        .then( () => setBorderColorAsync(divList[1], 'blue') )
        .then( () => setBorderColorAsync(divList[2], 'green') )
        .catch( err => alert(err) )
        .finally( () => console.log('finish') )
    /*setBorderColorAsync(divList[0], 'red', function() {
        setBorderColorAsync(divList[1], 'blue', function() {
            setBorderColorAsync(divList[2], 'green', function() {
                console.log('finish');
            });
        });
    });*/
}

function setBorderColorAsync(element, color) {
    //tu dodałem coś od siebie oraz stackoverflow-a :)
    const isColor = (strColor) => {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
    }
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //czy parametr 'element' jest elementem DOM
            if(element && element instanceof HTMLElement) {
                if( isColor(color) ) {
                    element.style.border = `3px solid ${color}`;
                    resolve();
                } else {
                    reject('Paremetr ~color~ musi być prawidłowym kolorem CSS')
                }
            } else {
                reject('Paremetr ~element~ musi być prawidłowym elementem DOM')
            }
        }, Math.random() * 3000);
    })
    return promise;
}

/*function setBorderColorAsync(element, color, callback) {
    if(element && element instanceof HTMLElement) {
        // sprawdzam czy parametr jest elementem DOM, więcej:
        // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        
        if(callback && typeof callback === 'function') {
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                callback();
            }, Math.random() * 3000);
        } else {
            alert('Parametr ~callback~ mus być funkcją');
        }
    } else {
        alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
    }
}*/