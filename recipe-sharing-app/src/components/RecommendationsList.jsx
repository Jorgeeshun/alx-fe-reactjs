// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = recipeStore((state) => state.recommendations);
  const generateRecommendations = recipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add favorites to get suggestions!</p>
      ) : (
        recommendations.map((recipe) => (
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

export default RecommendationsList;
