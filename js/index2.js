"use strict";
//** Получение доступа к странице */
const mainPElement = document.getElementById("mainP");
console.dir(mainPElement);

const [paragraphElement0, paragraphElement1, paragraphElement2] =
  document.getElementsByTagName("p");
console.dir(paragraphElement0);
console.dir(paragraphElement2);

const myClassElements = document.getElementsByClassName("myClass");
console.dir(myClassElements);

const pElement = document.querySelector(".myClass");
console.dir(pElement);

const myClassElements1 = document.querySelectorAll("p");
console.dir(myClassElements1);

//**Подписка на события */

const btnElement = document.querySelector("button");

btnElement.addEventListener("click", buttonClickHandler);

function buttonClickHandler(e) {
  alert("Yes");
}

const textSelection = document.querySelector("#mainP");

textSelection.addEventListener("copy", selectionHandler);

function selectionHandler(e) {
  alert("document is copied");
}
