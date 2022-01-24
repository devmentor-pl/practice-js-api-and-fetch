
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

const time = () => {
    const time = Math.random() * 3000;
    return time;
}


sayStart()
    .then(() => {
        return setBorderColorAsync(divList[0],'red',time())
    })
    .then(() => {
        return setBorderColorAsync(divList[1],'blue',time())
    })
    .then(() => {
        return setBorderColorAsync(divList[2],'green',time())
    })
    .then(() => console.log('end'))

