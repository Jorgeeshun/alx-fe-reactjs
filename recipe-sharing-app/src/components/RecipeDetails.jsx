import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { recipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';


const RecipeDetails = () => {
const { id } = useParams();
const recipeId = Number(id);
const recipe = recipeStore((s) => s.recipes.find((r) => r.id === recipeId));


if (!recipe) return (
<div>
<p>Recipe not found.</p>
<Link to="/">Back to list</Link>
</div>
);


return (
<div>
<h1>{recipe.title}</h1>
<p>{recipe.description}</p>


{recipe.ingredients && recipe.ingredients.length > 0 && (
<div>
<h4>Ingredients</h4>
<ul>
{recipe.ingredients.map((ing, idx) => (
<li key={idx}>{ing}</li>
))}
</ul>
</div>
)}


{recipe.prepTime != null && (
<p><strong>Prep time:</strong> {recipe.prepTime} min</p>
)}


<div style={{ marginTop: 12 }}>
<Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
<DeleteRecipeButton recipeId={recipe.id} />
<div style={{ marginTop: 8 }}>
<Link to="/">Back to list</Link>
</div>
</div>
</div>
);
};


export default RecipeDetails;