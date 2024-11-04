document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");

  setBorderColorAsync(divList[0], "red")
    .then(runBlue())
    .then(runGreen())
    .then(runFinish());

  function runBlue() {
    setBorderColorAsync(divList[1], "blue");
  }

  function runGreen() {
    setBorderColorAsync(divList[2], "green");
  }

  function runFinish() {
    console.log("finish");
  }
}
function setBorderColorAsync(element, color) {
  return new Promise((resolve, reject) => {
    if (element && element instanceof HTMLElement) {
      setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        resolve("Success");
      }, Math.random() * 3000);
    } else {
      reject("Error occured");
    }
  });
}
