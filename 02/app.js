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
//   if (element && element instanceof HTMLElement) {
//     // sprawdzam czy parametr jest elementem DOM, więcej:
//     // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object

//     if (callback && typeof callback === 'function') {
//       setTimeout(() => {
//         element.style.border = `3px solid ${color}`;
//         callback();
//       }, Math.random() * 3000);
//     } else {
//       alert('Parametr ~callback~ mus być funkcją');
//     }
//   } else {
//     alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
//   }
// }

document.addEventListener('DOMContentLoaded', init);

async function init() {
  const divList = document.querySelectorAll('div');
  try {
    await setBorderColorAsync(divList[0], 'red');
    await setBorderColorAsync(divList[1], 'blue');
    await setBorderColorAsync(divList[2], 'green');
  } catch (error) {
    console.log(error);
  }
}

function setBorderColorAsync(element, color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element && element instanceof HTMLElement) {
        element.style.border = `3px solid ${color}`;
        resolve();
      } else {
        reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
      }
    }, Math.random() * 3000);
  });
}
