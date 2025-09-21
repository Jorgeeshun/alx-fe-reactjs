import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';


const DeleteRecipeButton = ({ recipeId }) => {
const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
const navigate = useNavigate();


const handleDelete = () => {
const confirmed = window.confirm('Delete this recipe? This action cannot be undone.');
if (!confirmed) return;


deleteRecipe(recipeId);
navigate('/');
};


return (
<button onClick={handleDelete} style={{ marginLeft: 8 }}>
Delete
</button>
);
};


export default DeleteRecipeButton;