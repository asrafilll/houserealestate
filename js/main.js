const button = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "3",
  spaceBetween: 60,
  loop: "true",
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "2",
  spaceBetween: 20,
  loop: "true",
});
