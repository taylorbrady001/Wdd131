// main.js
import recipes from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const recipe = recipes[0];
  const container = document.getElementById('recipe-display');

  // Build rating stars with accessible aria-label
  function buildRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return `
      <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
        ${'<span aria-hidden="true" class="icon-star">⭐</span>'.repeat(fullStars)}
        ${'<span aria-hidden="true" class="icon-star-empty">☆</span>'.repeat(emptyStars)}
      </span>
    `;
  }

  container.innerHTML = `
    <h2>${recipe.name}</h2>
    <img src="${recipe.image}" alt="${recipe.name}" />
    ${buildRatingStars(recipe.rating)}
    <p class="description">${recipe.description}</p>

    <h3>Ingredients:</h3>
    <ul>
      ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>

    <h3>Instructions:</h3>
    <ol>
      ${recipe.recipeInstructions.map(step => `<li>${step}</li>`).join('')}
    </ol>

    <p><strong>Prep Time:</strong> ${recipe.prepTime} | <strong>Cook Time:</strong> ${recipe.cookTime} | <strong>Yield:</strong> ${recipe.recipeYield}</p>
  `;
});
