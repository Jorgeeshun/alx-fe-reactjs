import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';


const EditRecipeForm = () => {
const { id } = useParams();
const recipeId = Number(id);
const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
const updateRecipe = useRecipeStore((s) => s.updateRecipe);
const navigate = useNavigate();


const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [ingredientsInput, setIngredientsInput] = useState('');
const [prepTime, setPrepTime] = useState('');


useEffect(() => {
if (recipe) {
setTitle(recipe.title || '');
setDescription(recipe.description || '');
setIngredientsInput((recipe.ingredients || []).join(', '));
setPrepTime(recipe.prepTime != null ? String(recipe.prepTime) : '');
}
}, [recipe]);


if (!recipe) return <div>Recipe not found</div>;


const handleSubmit = (event) => {
event.preventDefault();
if (!title.trim() || !description.trim()) return;


const ingredients = ingredientsInput
.split(',')
.map((s) => s.trim())
.filter(Boolean);


updateRecipe(recipeId, {
title: title.trim(),
description: description.trim(),
ingredients,
prepTime: prepTime === '' ? null : Number(prepTime),
});


navigate(`/recipes/${recipeId}`);
};


return (
<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
<h2>Edit Recipe</h2>
<input value={title} onChange={(e) => setTitle(e.target.value)} required />
<textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={6} required />


<input
value={ingredientsInput}
onChange={(e) => setIngredientsInput(e.target.value)}
placeholder="Ingredients (comma-separated)"
/>


<input type="number" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} placeholder="Prep time (min)" />


<div style={{ display: 'flex', gap: 8 }}>
<button type="submit">Save</button>
<button type="button" onClick={() => navigate(-1)}>
Cancel
</button>
</div>
</form>
);
};


export default EditRecipeForm;