const divList = document.querySelectorAll('div');

const sayStart = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`start`);
            resolve()
        },1000)
    })
}

let getTime = () => { return time = Math.random() * 3000;}

const setBorderColorAsync = (element,color,time) => {
    return new Promise ((resolve, reject) => {
        if(element && element instanceof HTMLElement) {
            if(setBorderColorAsync && typeof setBorderColorAsync === 'function') {
                setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    resolve();
                },time)
            } else {
                reject('Parametr ~callback~ mus być funkcją');
            }
        } else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        }
    });
}

sayStart()
    .then(() => {
        return setBorderColorAsync(divList[0],'red',getTime())
    })
    .then(() => {
        return setBorderColorAsync(divList[1],'blue',getTime())
    })
    .then(() => {
        return setBorderColorAsync(divList[2],'green',getTime())
    })
    .then(() => console.log('end'))
    .catch(error => console.error(error));




// document.addEventListener('DOMContentLoaded', init);

// function init() {
//     const divList = document.querySelectorAll('div');
//     setBorderColorAsync(divList[0], 'red', function() {
//         setBorderColorAsync(divList[1], 'blue', function() {
//             setBorderColorAsync(divList[2], 'green', function() {
//                 console.log('finish');
//             });
//         });
//     });

// }

// function setBorderColorAsync(element, color, callback) {
//     if(element && element instanceof HTMLElement) {
//         // sprawdzam czy parametr jest elementem DOM, więcej:
//         // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
//         if(callback && typeof callback === 'function') {
//             setTimeout(() => {
//                 element.style.border = `3px solid ${color}`;
//                 callback();
//             }, Math.random() * 3000);
//         } else {
//             alert('Parametr ~callback~ mus być funkcją');
//         }
//     } else {
//         alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
//     }
// }

