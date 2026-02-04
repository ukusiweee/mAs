// Бургер-меню
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const body = document.body;
const header = document.getElementById("header");
const scrollTopBtn = document.getElementById("scrollTopBtn");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
  body.classList.toggle("menu-open");
});

// Закрытие меню при клике на ссылку
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
    body.classList.remove("menu-open");
  });
});

// Простая валидация формы
document.getElementById("requestForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Спасибо за запрос! Мы свяжемся с вами в ближайшее время.");
  this.reset();
});

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

// Функции для скрытия/показа шапки и кнопки "Наверх"
let lastScrollTop = 0;
const scrollThreshold = 192; // Насколько нужно прокрутить чтобы скрыть шапку

window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Управление шапкой (только для десктопа)
  if (window.innerWidth > 992) {
    if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
      // Прокручиваем вниз - скрываем шапку
      header.classList.add("header-hidden");
    } else {
      // Прокручиваем вверх или в начале страницы - показываем шапку
      header.classList.remove("header-hidden");
    }
  }

  // Управление кнопкой "Наверх"
  if (currentScroll > 192) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Кнопка "Наверх"
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Закрытие меню при клике вне его
document.addEventListener("click", function (e) {
  if (
    !navbar.contains(e.target) &&
    !menuToggle.contains(e.target) &&
    navbar.classList.contains("active")
  ) {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
    body.classList.remove("menu-open");
  }
});

// Фиксированная шапка при прокрутке
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
