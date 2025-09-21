// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { recipeStore } from './recipeStore';

const AddRecipeForm = () => {
const addRecipe = recipeStore((s) => s.addRecipe);
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [ingredientsInput, setIngredientsInput] = useState('');
const [prepTime, setPrepTime] = useState('');


const handleSubmit = (event) => {
event.preventDefault();
if (!title.trim() || !description.trim()) return;


const ingredients = ingredientsInput
.split(',')
.map((s) => s.trim())
.filter(Boolean);


const recipe = {
id: Date.now(),
title: title.trim(),
description: description.trim(),
ingredients,
prepTime: prepTime === '' ? null : Number(prepTime),
};


addRecipe(recipe);


setTitle('');
setDescription('');
setIngredientsInput('');
setPrepTime('');
};


return (
<form onSubmit={handleSubmit} style={{ marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Recipe Title" required />
<textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Recipe Description" required rows={4} />


<input
value={ingredientsInput}
onChange={(e) => setIngredientsInput(e.target.value)}
placeholder="Ingredients (comma-separated)"
/>


<input
type="number"
value={prepTime}
onChange={(e) => setPrepTime(e.target.value)}
placeholder="Prep time (minutes)"
/>


<button type="submit">Add Recipe</button>
</form>
);

export default AddRecipeForm;