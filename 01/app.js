document.addEventListener('DOMContentLoaded', init);

 function init() {
   const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red', function() {
            setBorderColorAsync(divList[1], 'blue', function() {
                setBorderColorAsync(divList[2], 'green', function() {
                    console.log('finish');
                });
            });
        });

        
    // setBorderColorAsync(divList[0], 'red', function() {
    //     setBorderColorAsync(divList[1], 'blue', function() {
    //         setBorderColorAsync(divList[2], 'green', function() {
    //             console.log('finish');
    //         });
    //     });
    // });

 }

const setBorderColorAsync = (element, color, callback) => {
    const promise = new Promise((resolve, reject) => {
        const time = Math.random() * 3000;
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            callback();
        }, time);
        });
        return promise;
    }
//     setBorderColorAsync(divList, color, callback)
//  .then(resp => console.log(resp))
//  .catch(err => console.error(err));
//     setTimeout(() => {
//         element.style.border = `3px solid ${color}`;
//         callback();
//     }, Math.random() * 3000);
// }

