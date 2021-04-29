const mainMenu = document.querySelector(".nav__mainMenu");
const closeMenu = document.querySelector(".nav__closeMenu");
const openMenu = document.querySelector(".nav__openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}
