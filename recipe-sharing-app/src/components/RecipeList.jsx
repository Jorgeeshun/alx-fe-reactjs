// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filters = useRecipeStore(state => state.filters);

  // Choose between filtered results and full list
  const displayedRecipes =
    searchTerm || filters.ingredients || filters.maxTime
      ? filteredRecipes
      : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayedRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        displayedRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            {recipe.ingredients && (
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
              </p>
            )}
            {recipe.prepTime && (
              <p>
                <strong>Prep Time:</strong> {recipe.prepTime} min
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;