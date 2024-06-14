const container = document.querySelector(".container");
console.log(container);
const likedEl = document.querySelector(".liked");
const heartEl = document.querySelector(".heart");

let randomNumber = Math.floor(Math.random() * 10);
let counter = 0;

async function fetchPhoto() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/?client_id=XtA-M9YWDwJ2xJ1avS-gqnByhxs4tZA2BwMdtHu5lEI`
    );
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.log("Ошибка при загрузке фотографии: ", error);
    return [];
  }
}

async function loadPhoto() {
  const photos = await fetchPhoto();
  if (photos.length > 0) {
    photos.forEach((photo, index) => {
      if (index === randomNumber) {
        const photoEl = document.querySelector(".photo");
        const img = photoEl.querySelector("img");
        img.classList.add("random-img");
        img.src = photo.urls.small;
        img.alt = photo.alt_description;

        const aboutPhoto = document.querySelector(".about-photo");
        const titleEl = aboutPhoto.querySelector(".about-photo_title");
        titleEl.textContent = photo.description;

        const autorName = document.querySelector(
          ".about-photo_autor-name > span"
        );
        if (photo.user.last_name !== null) {
          autorName.textContent = `${photo.user.first_name} ${photo.user.last_name}`;
        } else {
          autorName.textContent = photo.user.first_name;
        }
      }
    });
  }
}

// Загрузка фотографий при загрузке страници
loadPhoto();

// Обработка лайков
container.addEventListener("click", function (e) {
  if (e.target.textContent === "Лайк") {
    counter++;
    if (counter === 1) {
      likedEl.textContent = counter + " like";
    } else likedEl.textContent = counter + " likes";

    heartEl.classList.add("ani-like");
    setTimeout(() => {
      heartEl.classList.remove("ani-like");
    }, 1000);
  }
});
