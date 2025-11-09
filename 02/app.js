document.addEventListener('DOMContentLoaded', MyInit);

/*

function init() {
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
            alert('Parametr ~callback~ mus być funkcją');
        }
    } else {
        alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
    }
}

*/

// Promise zamiast callbacka

function setBorderColorAsyncSecound(element, color){

     return new Promise((resolve, reject) => {

        if(!element){
           reject(new Error('div nie istnieje'))
           return     
        }

     setTimeout(() => {
            element.style.border = `5px solid ${color}`
            element.style.borderRadius = `4px`
            console.log(`Kolor ustawiony na ${color}`)
            resolve()

        }, 1000 )
    })
}

function MyInit(){

    const divList = document.querySelectorAll('div')

    setBorderColorAsyncSecound(divList[0], 'red')

    .then(() => setBorderColorAsyncSecound(divList[1], 'blue'))
    .then(() => setBorderColorAsyncSecound(divList[2], 'green'))
    .then(() => console.log('finish secound'))

}
