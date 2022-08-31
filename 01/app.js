document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red', function () {
        setBorderColorAsync(divList[1], 'blue', function () {
            setBorderColorAsync(divList[2], 'green', function () {
                console.log('finish');
            });
        });
    });

}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}
// async

function getAsyncData(callback) {
    const time = Math.random() * 5000;
    const insideData = { name: 'secret', value: null };
    setTimeout(function () {
        callback(insideData)
    }, time);
}

console.log('before');
getAsyncData(function (data1) {
    console.log('async 1', data1);
});
getAsyncData(function (data2) {
    console.log('async 2', data2);
});
console.log('after');



//promise
const a = 12, b = 1;
const promise = new Promise(function (resolve, reject) {
    if (b !== 0) {
        resolve(a / b);
    } else {
        reject('nie dzielimy przez 0');
    }

});

promise.then(function (resp) {
    console.log(resp)
});

promise.catch(function (err) {
    console.log(err)
})
