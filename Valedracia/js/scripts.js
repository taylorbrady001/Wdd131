const slides = document.querySelectorAll(".carousel-images img");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    current = idx;
    showSlide(current);
  });
});

setInterval(nextSlide, 5000);
