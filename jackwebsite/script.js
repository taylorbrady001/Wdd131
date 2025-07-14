function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

function addToCart(productName) {
  alert(`${productName} has been added to your cart!`);
}

// Seamless carousel
let currentSlide = 1;
const track = document.getElementById("carouselTrack");
let slides = Array.from(track.children);
const dots = document.querySelectorAll(".dot");

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

slides = Array.from(track.children);
const slideWidth = slides[0].clientWidth;

track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[(index - 1 + dots.length) % dots.length].classList.add("active");
}

function goToSlide(index) {
  currentSlide = index;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  updateDots(index);
}

function nextSlide() {
  if (currentSlide >= slides.length - 1) return;
  currentSlide++;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  updateDots(currentSlide);
}

function prevSlide() {
  if (currentSlide <= 0) return;
  currentSlide--;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  updateDots(currentSlide);
}

track.addEventListener("transitionend", () => {
  if (slides[currentSlide].alt === "Slide 1") {
    currentSlide = 1;
    track.style.transition = "none";
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }

  if (slides[currentSlide].alt === "Slide 3") {
    currentSlide = slides.length - 2;
    track.style.transition = "none";
    track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  goToSlide(1);
  setInterval(() => {
    nextSlide();
  }, 5000);
});
