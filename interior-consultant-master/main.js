const $ = (selector) => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", function () {
  const menu_button = $(".btn-menu");
  const close_button = $(".btn-close");
  const responsive_menu = $(".menu-responsive");

  menu_button.addEventListener("click", function () {
    responsive_menu.classList.toggle("show");
  });
  close_button.addEventListener("click", function () {
    responsive_menu.classList.toggle("show");
  });
});
