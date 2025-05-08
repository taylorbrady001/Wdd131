const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000) {
    nav.classList.add("open");
  } else {
    nav.classList.remove("open");
  }
});
