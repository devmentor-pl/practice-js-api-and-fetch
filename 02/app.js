document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    /* setBorderColorAsync(divList[0], 'red', function() {
        setBorderColorAsync(divList[1], 'blue', function() {
            setBorderColorAsync(divList[2], 'green', function() {
                console.log('finish');
            });
        });
    }); */
    
    //setBorderColorAsync(divList[0], 'red', function() {
    //    console.log("f")
    //})
    //setBorderColorAsync(divList[1], 'blue', function() {
    //    console.log("f")
    //})
    //setBorderColorAsync(divList[2], 'green', function() {
    //    console.log("f")
    //})
    
}

function setBorderColorAsync(element, color, callback) {
    if(element && element instanceof HTMLElement) {
        // sprawdzam czy parametr jest elementem DOM, więcej:
        // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        
        const promise = new Promise((resolve, reject) => {
            if(callback && typeof callback === 'function') {
                resolve(setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    callback();
                }, Math.random() * 3000));
            } else {
            reject(alert('Parametr ~callback~ mus być funkcją'));
            }
           });
        //promise.then(function(resp) {
        //    console.log(resp);
        //   });
           
        //promise.catch(function(err) {
        //    console.log(err);
        //   });
           
       /* if(callback && typeof callback === 'function') {
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                callback();
            }, Math.random() * 3000);
        } else {
            alert('Parametr ~callback~ mus być funkcją');
        } */
    } else {
        alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
    }

    
       
}