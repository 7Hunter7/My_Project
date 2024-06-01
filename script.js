const listEl = document.querySelector(".list-trainings");

// Начальный список занятий
const data = JSON.parse(trainingData);

// Создание списка занятий
const createTrainingElement = (
  name,
  time,
  maxParticipants,
  currentParticipants
) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.style.width = "95%";
  cardEl.style.marginBottom = "20px";

  const liEl = document.createElement("div");
  liEl.classList.add("card-body");
  liEl.style.textAlign = "center";

  const titleEl = document.createElement("h2");
  titleEl.classList.add("d-block", "p-2", "text-bg-primary", "title");
  titleEl.textContent = name;

  const timeEl = document.createElement("p");
  timeEl.classList.add("text-primary", "time");
  timeEl.textContent = "Время проведения: ";
  timeEl.style.textAlign = "left";

  const spanTimeEl = document.createElement("span");
  spanTimeEl.textContent = time;
  timeEl.append(spanTimeEl);

  const maxParticipantsEl = document.createElement("p");
  maxParticipantsEl.classList.add("text-primary", "max-participants");
  maxParticipantsEl.textContent = "Максимальное количество участников:  ";
  maxParticipantsEl.style.textAlign = "left";

  const spanMaxParticipantsEl = document.createElement("span");
  spanMaxParticipantsEl.textContent = maxParticipants;
  maxParticipantsEl.append(spanMaxParticipantsEl);

  const currentParticipantsEl = document.createElement("p");
  currentParticipantsEl.classList.add("text-primary", "current-participants");
  currentParticipantsEl.textContent =
    "Текущее количество записанных участников:  ";
  currentParticipantsEl.style.textAlign = "left";

  const spanCurrentParticipantsEl = document.createElement("span");
  spanCurrentParticipantsEl.textContent = currentParticipants;
  currentParticipantsEl.append(spanCurrentParticipantsEl);

  const divBtn = document.createElement("div");
  divBtn.classList.add("btn-group");
  divBtn.setAttribute("role", "group");
  divBtn.setAttribute("aria-label", "Basic outlined example");

  const signBtn = document.createElement("button");
  signBtn.classList.add("btn", "btn-outline-primary", "sign-btn");
  signBtn.textContent = "Записаться";

  const сancelBtn = document.createElement("button");
  сancelBtn.classList.add("btn", "btn-outline-primary", "сancel-btn");
  сancelBtn.textContent = "Отменить запись";
  сancelBtn.setAttribute("disabled", "");

  divBtn.appendChild(signBtn);
  divBtn.appendChild(сancelBtn);

  liEl.appendChild(titleEl);
  liEl.appendChild(timeEl);
  liEl.appendChild(maxParticipantsEl);
  liEl.appendChild(currentParticipantsEl);
  liEl.appendChild(divBtn);
  cardEl.appendChild(liEl);
  return cardEl;
};

// Формируем элементы списка из "trainingData"
data.forEach((training) => {
  const trainingEl = createTrainingElement(
    training.name,
    training.time,
    training.maxParticipants,
    training.currentParticipants
  );
  listEl.appendChild(trainingEl);
});

// Обработчик кнопки "Записаться"
listEl.addEventListener("click", function (e) {
  if (e.target.textContent === "Записаться") {
    const trainingEl = e.target.closest("div.card");
    const titleEl = trainingEl.querySelector("h2.title").textContent;
    const timeEl = trainingEl.querySelector("p.time > span").textContent;
    let currentParticipantsEl = trainingEl.querySelector(
      ".current-participants > span"
    ).textContent;
    const maxParticipantsEl = trainingEl.querySelector(
      ".max-participants > span"
    ).textContent;
    const signBtn = trainingEl.querySelector("button.sign-btn");
    const сancelBtn = trainingEl.querySelector("button.сancel-btn");

    if (currentParticipantsEl === maxParticipantsEl) {
      signBtn.setAttribute("disabled", "");
      alert(
        `Невозможно записаться на занятие  "${titleEl}", так как достигнуто макисмальное количество участников: ${maxParticipantsEl}`
      );
      console.log("Достигнуто макисмальное количество участников!");
    } else {
      currentParticipantsEl = parseInt(currentParticipantsEl) + parseInt(1);

      const currentParticipantsInList = trainingEl.querySelector(
        ".current-participants > span"
      );
      currentParticipantsInList.textContent = currentParticipantsEl;
      alert(`Вы записались на занятие "${titleEl}" на ${timeEl}`);
      console.log(
        `Пользователь записался на занятие "${titleEl}" на ${timeEl}`
      );
      signBtn.setAttribute("disabled", "");
      сancelBtn.removeAttribute("disabled");
    }
  }

  // Обработчик кнопки "Отменить запись"
  if (e.target.textContent === "Отменить запись") {
    const trainingEl = e.target.closest("div.card");
    const titleEl = trainingEl.querySelector("h2.title").textContent;
    const timeEl = trainingEl.querySelector("p.time > span").textContent;
    let currentParticipantsEl = trainingEl.querySelector(
      ".current-participants > span"
    ).textContent;
    const signBtn = trainingEl.querySelector("button.sign-btn");
    const сancelBtn = trainingEl.querySelector("button.сancel-btn");

    currentParticipantsEl = parseInt(currentParticipantsEl) - parseInt(1);
    const currentParticipantsInList = trainingEl.querySelector(
      ".current-participants > span"
    );
    currentParticipantsInList.textContent = currentParticipantsEl;

    alert(`Вы отменили запись на занятие "${titleEl}" на ${timeEl}`);
    console.log(
      `Пользователь отменил запись на занятие "${titleEl}" на ${timeEl}`
    );

    сancelBtn.setAttribute("disabled", "");
    signBtn.removeAttribute("disabled");
  }
});
