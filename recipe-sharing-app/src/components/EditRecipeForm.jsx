import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';


const EditRecipeForm = () => {
const { id } = useParams();
const recipeId = Number(id);
const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId));
const updateRecipe = useRecipeStore((state) => state.updateRecipe);
const navigate = useNavigate();


const [title, setTitle] = useState('');
const [description, setDescription] = useState('');


useEffect(() => {
if (recipe) {
setTitle(recipe.title);
setDescription(recipe.description);
}
}, [recipe]);


if (!recipe) return <div>Recipe not found</div>;


const handleSubmit = (event) => {
event.preventDefault();
if (!title.trim() || !description.trim()) return;


updateRecipe(recipeId, { title: title.trim(), description: description.trim() });
navigate(`/recipes/${recipeId}`);
};


return (
<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
<h2>Edit Recipe</h2>
<input value={title} onChange={(e) => setTitle(e.target.value)} required />
<textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={6} required />
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