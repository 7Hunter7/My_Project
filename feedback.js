console.log("Задание 2");

// Массив отзывов для начальной загрузки данных
const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго. Камера просто улёт!",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе. Отличный телефон! ",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Хороший телефон, камера на высоте) Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте. Играть одно удовольствие!",
      },
    ],
  },
];
// Инициализация списка отзывов
initialData.forEach((item) => {
  item.reviews.forEach((review) => {
    addReview(review.text);
  });
});

function addReview(review) {
  // Проверяем, что длина отзыва находится в пределах допустимого диапазона
  if (review.length >= 50 && review.length <= 500) {
    // Создаем элемент div для нового отзыва
    const newReview = document.createElement("div");
    newReview.className = "review";
    const titleEl = document.createElement("div");
    newReview.textContent = review;

    // Добавляем новый отзыв в конец списка отзывов
    const reviewsContainer = document.querySelector(".reviews");
    reviewsContainer.appendChild(newReview);
  } else {
    throw new Error(`Отзыв должен содержать от 50 до 500 символов!`);
  }
}
// Обработчик события отправки формы
const formaEl = document.querySelector(".add-review");
formaEl.addEventListener("submit", function (e) {
  e.preventDefault(); // Предотвращаем стандартное поведение формы

  try {
    // Получаем текст отзыва из поля ввода
    const reviewText = document.querySelector(".reviewText").value;

    // Добавляем отзыв в список
    addReview(reviewText);
  } catch (error) {
    alert(error.message);
  }
});
