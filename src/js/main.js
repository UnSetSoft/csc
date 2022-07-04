/* Nav Script */
let nav, list;

nav = document.querySelector("[data-togglemenu]");
list = document.querySelectorAll("[data-menulist]");

nav.addEventListener("click", function () {
  list.forEach((item) => {
    item.classList.toggle("kg-show__list");
  });
});
