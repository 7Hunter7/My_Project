document.addEventListener("DOMContentLoaded", () => {
  const circle = document.querySelector(".circle");
  let isMoving = false;

  circle.addEventListener("mouseover", function () {
    if (!isMoving) {
      const randomTop = Math.random() * window.innerHeight;
      const randomLeft = Math.random() * window.innerWidth;

      circle.style.top = `${randomTop}px`;
      circle.style.left = `${randomLeft}px`;
    }
  });

  circle.addEventListener("mousedown", function () {
    isMoving = true;
    circle.style.backgroundColor = "blue";
    circle.textContent = "Поймал! ;)";
  });

  circle.addEventListener("mouseup", function () {
    isMoving = false;
    circle.style.backgroundColor = "green";
    circle.textContent = "Поймай меня!";
  });
});
