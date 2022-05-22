document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    // first solution callback hell
    // -----------------
    // setBorderColorAsync(divList[0], 'red', function() {
    //     setBorderColorAsync(divList[1], 'blue', function() {
    //         setBorderColorAsync(divList[2], 'green', function() {
    //             console.log('finish');
    //         });
    //     });
    // })

    // Promise 1 - solution 1 with variables
    // -----------------
    // const border1 = setBorderColorAsync(divList[0], 'red')
    // const border2 = border1.then(() => {
    //     return setBorderColorAsync(divList[1], 'green')
    // })
    // border2.then(() => {
    //     return setBorderColorAsync(divList[2], 'blue')
    // }).then(() => console.log('finished'))

    // Promise 2 - solution using only then
    // ------------------
    const promise = setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'green'))
        .then(() => setBorderColorAsync(divList[2], 'blue'))
        .then(() => console.log('finished'))
        .catch(err => console.log(err))

    console.log(promise)

}

function isElement(o){
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
  )
}

// sprawdzam czy parametr jest elementem DOM, więcej:
// https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        

function setBorderColorAsync(element, color) {
    const el = isElement(element)

        // if(callback && typeof callback === 'function') {
            return new Promise((resolve, reject) => {
                if(el) {
                    console.log('Element DOM', el)
                    setTimeout(() => {
                        element.style.border = `3px solid ${color}`;
                        resolve()
                    }, Math.random() * 3000)
                } else {
                    reject('Element not DOM')
                }
            })
        // } else {
        //     alert('Parametr ~callback~ mus być funkcją');
        // }
}