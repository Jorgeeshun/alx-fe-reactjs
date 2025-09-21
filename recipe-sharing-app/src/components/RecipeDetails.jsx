import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';


const RecipeDetails = () => {
const { id } = useParams();
const recipeId = Number(id);
const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId));


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