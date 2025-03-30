document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");

  setBorderColorAsync(divList[0], "red")
    .then(() => setBorderColorAsync(divList[1], "blue"))
    .then(() => setBorderColorAsync(divList[2], "green"))
    .then(() => console.log("Finish"));
}

function setBorderColorAsync(element, color) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      element.style.border = `3px solid ${color}`;
      resolve();
    }, Math.random() * 3000);
  });
  return promise;
}

// setBorderColorAsync bez () => sprawia, że resolve(); nie ma znaczenia, dlatego ramki wyświetlają się nie po kolei.