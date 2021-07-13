"use strict";
//* получение доступа к элементам ХТМЛ

const mainPElement = document.getElementById("mainP");
console.dir(mainPElement);

const paragraphElements = document.getElementsByTagName("p");
console.dir(paragraphElements);

const [paragraphElement0, paragraphElement1, paragraphElement2] =
  document.getElementsByTagName("p");
console.dir(paragraphElements);

const myClassElements = document.getElementsByClassName("myClass");
console.dir(myClassElements);

const pElement = document.querySelector(".myClass");
console.dir(pElement);

const myClassElements1 = document.querySelectorAll(".myClass");
console.dir(myClassElements1);
//================================
const buttonElements = document.querySelector("button");

// buttonElements.addEventListener("click", buttonClickHandler);
buttonElements.addEventListener("click", (e) => {
  alert("Click!");
});

// function buttonClickHandler(e) {
//   alert("I was clicked");
//

/****create element */
// const newP = document.createElement("p");
// const newPprepend = document.createElement("p");
// const newAfter = document.createElement("p");

// // const articleElement = document.querySelector("article");
// const h2Element = document.querySelector("h2");

// // newP.append("New paragraph");
// // articleElement.append(newP);
// h2Element.after("newAfter");

// // newPprepend.append("New P Prepend");
// // articleElement.prepend(newPprepend);
// h2Element.after(newAfter);
const newAfter = document.createElement("p");

const h2Element = document.querySelector("h2");

newAfter.append("newAfter");

h2Element.after(newAfter);
