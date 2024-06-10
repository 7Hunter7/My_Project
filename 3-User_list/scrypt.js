const userListEl = document.getElementById("user-list");
console.log(userListEl);

// Функция для получения списка пользователей
async function fetchUserList() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.log("Ошибка при загрузке списка пользователей: ", error);
    return [];
  }
}

// Обновляем страницу м пользователями при загрузке
window.addEventListener("load", async () => {
  const userList = await fetchUserList();

  if (userList.length > 0) {
    userList.forEach((user) => {
      const userLi = document.createElement("li");

      const userName = document.createElement("p");
      userName.textContent = "Пользователь: ";
      const userNameSpan = document.createElement("span");
      userNameSpan.textContent = user.name;
      userName.append(userNameSpan);

      const userEmail = document.createElement("p");
      userEmail.textContent = "Email: ";
      userEmail.style.marginLeft = "55px";
      const userEmailSpan = document.createElement("span");
      userEmailSpan.textContent = user.email;
      userEmail.append(userEmailSpan);

      userLi.append(userName);
      userLi.append(userEmail);

      userListEl.append(userLi);
    });
  }
});
