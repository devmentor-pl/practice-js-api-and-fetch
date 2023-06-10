document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");
  //   console.log(setBorderColorAsync(divList[0], "red"));
  setBorderColorAsync(divList[0], "red")
    .then(() => setBorderColorAsync(divList[1], "blue"))
    .then(() => setBorderColorAsync(divList[2], "green"))
    .then(() => console.log("finish"))
    .catch((err) => alert(err));
}

function setBorderColorAsync(element, color) {
  const promise = new Promise(function (resolve, reject) {
    if (element && element instanceof HTMLElement) {
      resolve(
        setTimeout(() => {
          element.style.border = `3px solid ${color}`;
        }, Math.random() * 3000)
      );
    } else {
      reject(alert("Parametr ~callback~ mus być funkcją"));
    }
  });
  return promise;
}
