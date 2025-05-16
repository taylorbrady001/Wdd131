const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#mainNav");

function toggleMenu() {
  menu.classList.toggle("open");
}
menuButton.addEventListener("click", toggleMenu);
function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.add("open");
  } else {
    menu.classList.remove("open");
  }
}

window.addEventListener("resize", handleResize);
handleResize();

const gallery = document.querySelector(".gallery");
function openImageViewer(event) {
  const imgClicked = event.target.closest("img");
  if (!imgClicked) return; 

  const modal = document.createElement("dialog");
  Object.assign(modal.style, {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 10,
    border: "none",
    padding: 0,
    position: "fixed",
    top: 0,
    left: 0,
  });

  const srcSmall = imgClicked.getAttribute("src");
  const baseName = srcSmall.split("-")[0];
  const srcFull = baseName + "-full.jpeg";

  modal.innerHTML = `
    <img src="${srcFull}" alt="${imgClicked.alt}" style="display:block; margin:20vh auto; max-height: 100%; width: 90%;">
    <button class="close-viewer" style="position: absolute; top: 20vh; right: 5%; font-size: 1.5rem;">X</button>
  `;

  document.body.appendChild(modal);
  modal.showModal();

  modal.querySelector(".close-viewer").addEventListener("click", () => {
    modal.close();
    modal.remove();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close();
      modal.remove();
    }
  });
}

gallery.addEventListener("click", openImageViewer);
