//начальный список статей
const data = JSON.parse(articlesData);

const articleList = document.querySelector(".article-list");
data.forEach((articleData) => {
  const articleItem = createArticleElement(
    articleData.title,
    articleData.content
  );
  articleList.appendChild(articleItem);
});

// Создание списка статей
function createArticleElement(title, content) {
  const cardEl = document.createElement("li");
  cardEl.classList.add("card");
  cardEl.style.width = "95%";

  const liEl = document.createElement("div");
  liEl.classList.add("card-body");

  const titleLiEl = document.createElement("h3");
  titleLiEl.classList.add("card-title");
  titleLiEl.textContent = title;

  const textLiEl = document.createElement("p");
  textLiEl.classList.add("card-text");
  textLiEl.textContent = content;

  const divBtn = document.createElement("div");
  divBtn.classList.add("btn-group");
  divBtn.setAttribute("role", "group");
  divBtn.setAttribute("aria-label", "Basic outlined example");

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn", "btn-outline-primary");
  removeBtn.textContent = "Удалить";

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn", "btn-outline-primary");
  editBtn.textContent = "Редактировать";

  divBtn.appendChild(removeBtn);
  divBtn.appendChild(editBtn);

  liEl.appendChild(titleLiEl);
  liEl.appendChild(textLiEl);
  liEl.appendChild(divBtn);
  cardEl.appendChild(liEl);

  return cardEl;
}

// Добавление статьи
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
  const newArticle = {
    title: "Новая статья",
    content: "Введите содержание статьи...",
  };
  const articleItem = createArticleElement(
    newArticle.title,
    newArticle.content
  );
  articleList.appendChild(articleItem);
  console.log(`Добавлена новая статья`);
});

// Удаление статей
articleList.addEventListener("click", function (e) {
  if (e.target.textContent === "Удалить") {
    const articleItem = e.target.closest("li.card");
    articleItem.remove();
    console.log(`Статья удалена`);
  }
  // Редактирование статей
  if (e.target.textContent === "Редактировать") {
    const articleItem = e.target.closest("div.card-body");
    const articleTitle = articleItem.querySelector("h3.card-title");
    const articleContent = articleItem.querySelector("p.card-text");

    const newTitle = prompt(
      "Введите новый заголовок",
      articleTitle.textContent
    );
    const newContent = prompt(
      "Введите новое содержание статьи",
      articleContent.textContent
    );
    if (newTitle !== null && newContent !== null) {
      articleTitle.textContent = newTitle;
      articleContent.textContent = newContent;
      console.log(`Статья была изменена`);
    }
  }
});
