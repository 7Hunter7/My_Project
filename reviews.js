document.addEventListener("DOMContentLoaded", function () {
  console.log("Страница загружена");
});

const productsList = document.querySelector(".reviews");

for (let i = 0; i < localStorage.length; i++) {
  let productTitle = localStorage.key(i);
  let productReview = JSON.parse(localStorage.getItem(productTitle));

  //добавление списка продуктов
  const productEl = document.createElement("div");
  productsList.insertAdjacentElement("beforeend", productEl);
  productEl.insertAdjacentHTML(
    "beforeend",
    `<h3>${productTitle} <button onclick="openReview(this)">все отзывы</button> </h3>`
  );

  //добавление блока для отзывов
  const divReviews = document.createElement("div");
  divReviews.hidden = true;
  productEl.insertAdjacentElement("beforeend", divReviews);

  //заполнение отзывов
  productReview.forEach((element) => {
    const newReview = document.createElement("p");
    divReviews.insertAdjacentElement("beforeend", newReview);

    const reviewText = document.createElement("span");
    reviewText.textContent = element;
    newReview.insertAdjacentElement("beforeend", reviewText);

    //кнопка удаления
    newReview.insertAdjacentElement(
      "beforeend",
      deleteReviewBtn(reviewText, productReview, productTitle)
    );
  });
}

//создание кнопки удаления отзыва
function deleteReviewBtn(textReview, setReview, product) {
  const delBtn = document.createElement("button");
  delBtn.textContent = "Удалить";

  delBtn.addEventListener("click", () => {
    if (setReview.length > 1) {
      let indexItem = setReview.findIndex(
        (element) => element === textReview.textContent
      );
      setReview.splice(indexItem, 1);
      localStorage.setItem(product, JSON.stringify(setReview));
    } else {
      localStorage.removeItem(product);
      delBtn.parentElement.parentElement.parentElement.remove();
    }
    textReview.parentElement.remove();
    delBtn.remove();
  });

  return delBtn;
}

//функция открытия-скрытия блока отзывов
function openReview(elem) {
  let hiddenElement = elem.parentElement.parentElement.lastChild;
  if (hiddenElement.hidden) {
    hiddenElement.hidden = false;
    elem.textContent = "скрыть отзывы";
  } else {
    hiddenElement.hidden = true;
    elem.textContent = "показать отзывы";
  }
}
