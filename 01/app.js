document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    //2. Solution - promises
    setBorderColorAsync(divList[0], 'red')
        .then(res1 => setBorderColorAsync(divList[1], 'green'))
        .then(res2 => setBorderColorAsync(divList[2], 'blue'))
        .finally(() => {
            console.log('Finish')
        })



    //1. Solution (before setBorderColorAsync was rebuilt)
    /*  setBorderColorAsync(divList[0], 'red', firstCallback);

     function firstCallback() {
         setBorderColorAsync(divList[1], 'blue', secondCallback)
     }

     function secondCallback() {
         setBorderColorAsync(divList[2], 'green', thirdCallback);
     }

     function thirdCallback() {
         console.log('Finish')
     } */


}

const setBorderColorAsync = (element, color) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(element.style.border = `3px solid ${color}`);
        }, Math.random() * 3000);
    });
    return promise;
}