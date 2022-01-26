// //Pierwsze rozwiazanie

// const divList = document.querySelectorAll('div');

// const setBorderColorAsync = (element,color) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             element.style.border = `3px solid ${color}`;
//             resolve();
//         },Math.random() * 3000)
//     });
// }

// setBorderColorAsync(divList[0],'red')
//     .then(() => setBorderColorAsync(divList[1],'blue'))
//     .then(() => setBorderColorAsync(divList[2],'green'))



// Drugie rozwiazanie
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
            if(getTime && typeof getTime === 'function') {
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


