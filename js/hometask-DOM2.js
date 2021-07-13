"use strict";
// 1.Сделать два инпута: в один вводить параметр(число), во втором показывать объем шара при заданном параметре. Навесить валидацию на 1-й инпут.

//1st method
function calculate() {
  const radius = document.getElementById("inputFormValue").value;
  const rezult = document.getElementById("rezultFormValue");
  if (isNaN(radius)) throw alert("Input number");
  let v;
  v = (4 / 3) * Math.PI * Math.pow(radius, 3);
  rezult.value = v;
}

//2nd method
const buttonClick = document.getElementById("button2");
buttonClick.addEventListener("click", calculate2);

function calculate2() {
  const radius2 = document.getElementById("inputFormValue2").value;
  const rezult2 = document.getElementById("rezultFormValue2");
  if (isNaN(radius2)) throw alert("Input number in second method");
  let v;
  v = (4 / 3) * Math.PI * Math.pow(radius2, 3);
  rezult2.value = v;
}
//

// 2.Дан элемент #elem. Реализуйте 4 функции:
const element = document.getElementById("elem");
// - Добавьте ему класс www.
element.classList.add("www");
element.classList.add("www2");

// - Удалите у него класс www.
element.classList.remove("www");
// - Проверьте наличие у него класса www.
console.log(
  `element.classList.contains("www")`,
  element.classList.contains("www")
);
console.log(
  `element.classList.contains("www2")`,
  element.classList.contains("www2")
);
// - Добавьте ему класс www, если его нет и удалите - если есть.
// (https://developer.mozilla.org/ru/docs/Web/API/Element/classList)
function changeClass() {
  if (element.classList.contains("www")) {
    element.classList.remove("www");
  } else {
    element.classList.add("www");
  }
}
changeClass();
// 3. Вставьте элементы массива объектов (id, title, description) в конец ul так, чтобы на каждый объект был свой li.



const Objects = [
  {
    id: 1,
    title: "Title 1",
    description: "title 1 description",
  },
  {
    id: 2,
    title: "Title 2",
    description: "title 2 description",
  },
  {
    id: 3,
    title: "Title 3",
    description: "title 3 description",
  },
];

const objectsElement = document.getElementById("objElements");

Objects.forEach((object) =>
  objectsElement.append(generateobjectsElement(object))
);

function generateobjectsElement({ id, title, description }) {
  const elementItem = document.createElement("li");

  const objectsFullInfo = document.createElement("div");

  objectsFullInfo.append(
    `id: ${id} title: ${title} description: ${description}`
  );

  elementItem.append(objectsFullInfo);

  // Сделайте так, чтобы по нажатию на кнопку внутри li эта li удалялась из разметки.
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.onclick = (e) => {
    delBtn.parentElement.remove();
  };
  elementItem.append(delBtn);
  return elementItem;
};

// Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.

const liBacklightDown=document.querySelectorAll('li');
liBacklightDown.forEach((element) => 
element.addEventListener('mousedown', e => {element.style.backgroundColor = "green"}))
;
const liBacklightUp=document.querySelectorAll('li');
liBacklightUp.forEach((element) => 
element.addEventListener('mouseup', e => {element.style.backgroundColor = "inherit"}))
;
