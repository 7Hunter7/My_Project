document.addEventListener("DOMContentLoaded", () => {
  // Определение переменных
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.length;

  // События для кнопок «Предыдущий» и «Следующий»
  document.getElementById("prevBtn").addEventListener("click", () => {
    changeSlide(-1);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    changeSlide(1);
  });

  // Обработчики событий для точек
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  // Функция для смены слайдов
  function changeSlide(direction) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // Функция для перехода к определенному слайду
  function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // Инициализация первого слайда
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
});
