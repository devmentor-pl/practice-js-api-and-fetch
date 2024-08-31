document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");
  firstCallback(divList);
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}

function firstCallback(divList) {
  setBorderColorAsync(divList[0], "red", function () {
    secondCallback(divList);
  });
}

function secondCallback(divList) {
  setBorderColorAsync(divList[1], "blue", function () {
    thirdCallback(divList);
  });
}

function thirdCallback(divList) {
  setBorderColorAsync(divList[2], "green", function () {
    console.log("finish");
  });
}
