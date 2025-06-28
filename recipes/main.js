import recipes from './recipes.mjs';

// Function to generate a random integer between 0 (inclusive) and num (exclusive)
function random(num) {
  return Math.floor(Math.random() * num);
}

// Function to get a random entry from a list
function getRandomListEntry(list) {
  return list[random(list.length)];
}

// Template function to generate star rating markup
function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
  html += `</span>`;
  return html;
}

// Template function to generate tags markup
function tagsTemplate(tags) {
  return `<ul class="recipe__tags">
    ${tags.map(tag => `<li>${tag}</li>`).join('')}
  </ul>`;
}

// Template function for a single recipe
function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="Image of ${recipe.name}" />
    <figcaption>
      ${tagsTemplate(recipe.tags)}
      <h2><a href="${recipe.url || '#'}">${recipe.name}</a></h2>
      <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
      <p class="recipe__description">${recipe.description}</p>
      <p><strong>Prep:</strong> ${recipe.prepTime} | <strong>Cook:</strong> ${recipe.cookTime}</p>
    </figcaption>
  </figure>`;
}

// Render a list of recipes to the page
function renderRecipes(recipeList) {
  const container = document.getElementById('recipe-display');
  container.innerHTML = recipeList.map(recipeTemplate).join('');
}

// Filter recipes based on a query string
function filterRecipes(query) {
  query = query.toLowerCase();
  return recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.recipeIngredient.some(ing => ing.toLowerCase().includes(query)) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }).sort((a, b) => a.name.localeCompare(b.name));
}

// Handle the search form submission
function searchHandler(event) {
  event.preventDefault();
  const input = document.querySelector('input[type="search"]');
  const query = input.value.trim().toLowerCase();

  if (!query) {
    // If search input is empty, show a random recipe
    renderRecipes([getRandomListEntry(recipes)]);
    return;
  }

  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

// Initialize the page: show a random recipe and attach event listener
function init() {
  renderRecipes([getRandomListEntry(recipes)]);

  const form = document.querySelector('.search-form');
  form.addEventListener('submit', searchHandler);
}

init();
