const themeSelector = document.querySelector('#theme-select');
const body = document.body;
const logo = document.querySelector('.logo'); 

function changeTheme() {
  const selectedTheme = themeSelector.value;

  if (selectedTheme === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo_white.png'; // White logo for dark background
  } else {
    body.classList.remove('dark');
    logo.src = 'logo.webp'; // Blue logo for light background
  }
}

themeSelector.addEventListener('change', changeTheme);