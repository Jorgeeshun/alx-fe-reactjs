// src/components/FavoritesList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import recipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = recipeStore((state) => state.recipes);
  const favorites = recipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
