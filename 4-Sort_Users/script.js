const userList = document.querySelector("#user-list");
const sortSelect = document.querySelector("#sort-select");

// Загружаем данные о пользователях с помощью API
fetch("https://randomuser.me/api/?results=5")
  .then((response) => response.json()) // Преобразуем ответ в формат JSON
  .then((data) => {
    let users = data.results; //Получаем масссив с данными о ползователях

    // Первоначальный вывод списка ползователей
    renderUserList(users);

    // Обработчик события изменения выбора в селекторе
    sortSelect.addEventListener("change", () => {
      const selectedOption = sortSelect.value; // Получаем выбранный параметр сортировки
      users = sortUsers(users, selectedOption); // Сортируем пользователей в соответствии с выбранным параметром
      renderUserList(users); // Выводим отсортированный список пользователей на страницу
    });
  })
  .catch((error) => console.log(error));

// Функция для вывода списка пользователей на страницу
function renderUserList(users) {
  userList.innerHTML = ""; // Очищаем список пользователей перед выводом

  // Создаем элементы HTML для каждого пользователя и добавляем их в список
  users.forEach((user) => {
    const userEl = createUserElement(user);
    userList.append(userEl);
  });
}

// Функция для создания пользователя
function createUserElement(user) {
  const userContainer = document.createElement("div");
  userContainer.classList.add("user");

  const userName = document.createElement("p");
  userName.textContent = `Имя: ${user.name.first} ${user.name.last}`;
  userContainer.append(userName);

  const userAge = document.createElement("p");
  userAge.textContent = `Возраст: ${user.dob.age}`;
  userContainer.append(userAge);

  return userContainer;
}

// Функция для сортировки пользователей
function sortUsers(users, sortBy) {
  return users.sort((a, b) => {
    if (sortBy === "name_A-Z") {
      return a.name.first.localeCompare(b.name.first); // Сортировка по имени A-Z с использованием метода localeCompare()
    } else if (sortBy === "name_Z-A") {
      return b.name.first.localeCompare(a.name.first);
    } else if (sortBy === "age_up") {
      return a.dob.age - b.dob.age;
    } else if (sortBy === "age_down") {
      return b.dob.age - a.dob.age;
    }
  });
}
