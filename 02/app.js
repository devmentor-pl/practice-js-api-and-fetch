document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    //setBorderColorAsync(divList[0], 'red', function() {
       // setBorderColorAsync(divList[1], 'blue', function() {
            //setBorderColorAsync(divList[2], 'green', function() {
              //  console.log('finish');
           // });
        //});
    //});

    setBorderColorAsync(divList[0],'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .catch((err) => console.log(err))
        .finally(() => console.log('done'));
}       

const setBorderColorAsync =(element, color) => {
    const promise = new Promise((resolve, reject) => {
        const time = Math.random() * 3000;
    


if(element && element instanceof HTMLElement) {
        // sprawdzam czy parametr jest elementem DOM, więcej:
        // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            resolve('ok');
            }, time );

        } 
           else {
                reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
    }
});
    return promise;
}
