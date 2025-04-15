document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
      slidesPerView: 5, // Exibir 5 por vez
      spaceBetween: 10, // Espaço entre os slides
      loop: true, // Permitir rotação infinita
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 5 }, // Garante que no desktop mostre 5
      },
    });
  });