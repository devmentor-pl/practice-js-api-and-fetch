// document.addEventListener('DOMContentLoaded', init);

// function init() {
//   const divList = document.querySelectorAll('div');

//   setBorderColorAsync(divList[0], 'red', function () {
//     setBorderColorAsync(divList[1], 'blue', function () {
//       setBorderColorAsync(divList[2], 'green', function () {
//         console.log('finish');
//       });
//     });
//   });
// }

// function setBorderColorAsync(element, color, callback) {
//   setTimeout(() => {
//     element.style.border = `3px solid ${color}`;
//     callback();
//   }, Math.random() * 3000);
// }

document.addEventListener('DOMContentLoaded', init);

function init() {
  const divList = document.querySelectorAll('div');
  setBorderColorAsync(divList[0], 'red')
    .then(() => setBorderColorAsync(divList[1], 'blue'))
    .then(() => setBorderColorAsync(divList[2], 'green'))
    .catch((error) => console.log(error));
}

function setBorderColorAsync(element, color) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element && color) {
        element.style.border = `3px solid ${color}`;
        resolve();
      } else {
        reject('BŁĄD!');
      }
    }, Math.random() * 3000);
  });
  return promise;
}
