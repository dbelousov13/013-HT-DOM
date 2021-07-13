"use strict";

// const btns = document.querySelectorAll("button");

// for (const btn of btns) {
//   btn.addEventListener("click", ({ target }) => {
//     console.dir(target.dataset.host);
//     console.dir(target.dataset.buttonColor);
//     console.dir(target.dataset.firstname);
//   });
// }

//менять цвет див в зависимости от нажатой кнопки

const btns = document.querySelectorAll("button");
const div = document.querySelector("div");

for (const btn of btns) {
  btn.addEventListener("click", changeDivColorHandler);
}

function changeDivColorHandler({
  target: {
    dataset: { color },
  },
}) {
  div.style.backgroundColor = color;
}
