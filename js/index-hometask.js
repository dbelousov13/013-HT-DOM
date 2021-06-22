//  1) По нажатию на кнопку изменить текст самой кнопки (см. innerText).

const btnElement = document.querySelector("button");

btnElement.addEventListener("click", buttonClickHandler);

function buttonClickHandler(e) {
  btnElement.innerText = "Текст изменен";
}

// 2) Отобразить картинку. Сделать так, что бы при появлении страницы отображалсь одна картинка, а при наведении мышью на неё отображалась другая.

const imagePic = document.querySelector("img");
function getImage() {
  imagePic.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEbYyd68CrU_dZQ3FU20yeLpwh2_f9RT2vw&usqp=CAU"
  );
}
getImage();

imagePic.addEventListener("mousemove", changeImagePic);

function changeImagePic() {
  imagePic.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsBbs3Ep5NYTMtKVUIPObrXhWkZ2sw583UA&usqp=CAU "
  );
}

// 3) Сгенерировать заданную структуру:
//     <h1>Header1</h1>
//     <article>
//     <h2>Header2</h2>
//     <div><img src="" alt=""></div>
//     <p>It is paragraph</p>
//     </article>
//     (привязать <div id="root"></div>) --></article>

const header1 = document.createElement("h1");
const header2 = document.createElement("h2");
const article = document.createElement("article");
const div = document.createElement("div");
const p = document.createElement("p");
const image = document.createElement("img");

const mainDivElement = document.getElementById("root");

header1.append("Header 1");

mainDivElement.append(header1);
mainDivElement.append(article);
article.setAttribute("id", "secondArticle");

mainDivElement.append(header2);

const articleElement = document.getElementById("secondArticle");
header2.append("Header 2");
articleElement.append(header2);
articleElement.append(div);
div.setAttribute("id", "divForImg");

const divImg = document.getElementById("divForImg");
divImg.append(image);
image.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTrPXAfLV7Bl18e1mABwYsv1tfEtZu04nig&usqp=CAU"
);

p.append("Paragraph text");
mainDivElement.append(p);
