
const divList = document.querySelectorAll('div');

const sayStart = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`start`);
            resolve()
        },1000)
    })
}

const setBorderColorAsync = (element,color,time) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            resolve();
        },time)
    });
}

let getTime = () => { return time = Math.random() * 3000;}

sayStart()
    .then(() => {
        return setBorderColorAsync(divList[0],'red', getTime())
    })
    .then(() => {
        return setBorderColorAsync(divList[1],'blue', getTime())
    })
    .then(() => {
        return setBorderColorAsync(divList[2],'green', getTime())
    })
    .then(() => console.log('end'))

