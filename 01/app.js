document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");

  setBorderColorAsync(
    divList[0],
    "red",
    firstElemSetBorderColorFinishCallback.bind(null, divList)
  );
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;

    callback();
  }, Math.random() * 3000);
}

function firstElemSetBorderColorFinishCallback(elemList) {
  setBorderColorAsync(
    elemList[1],
    "blue",
    secondElemSetBorderColorFinishCallback.bind(null, elemList)
  );
}

function secondElemSetBorderColorFinishCallback(elemList) {
  setBorderColorAsync(
    elemList[2],
    "green",
    thirdElemSetBorderColorFinishCallback
  );
}

function thirdElemSetBorderColorFinishCallback() {
  console.log("finish");
}
