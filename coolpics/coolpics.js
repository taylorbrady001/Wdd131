const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});
