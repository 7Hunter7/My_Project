document.addEventListener("DOMContentLoaded", function () {
  console.log("Страница загружена");
  const productInput = document.querySelector(".input-product");
  const reviewInput = document.querySelector(".user-review");
  const addBtn = document.querySelector(".add-review");
  const errorEl = document.querySelector(".error");

  addBtn.addEventListener("click", function () {
    const product = productInput.value;
    const review = reviewInput.value;

    if (product !== "" && review !== "") {
      let reviews = JSON.parse(localStorage.getItem(product));
      if (reviews === null) {
        reviews = [];
      }
      reviews.push(review);
      localStorage.setItem(product, JSON.stringify(reviews));
    } else {
      errorEl.textContent = "Все поля должны быть обязтельно заполнены!";
    }
  });
});
