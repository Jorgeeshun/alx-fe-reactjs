import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';


const DeleteRecipeButton = ({ recipeId }) => {
const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
const navigate = useNavigate();


const handleDelete = () => {
const confirmed = window.confirm('Delete this recipe? This action cannot be undone.');
if (!confirmed) return;


deleteRecipe(recipeId);
// navigate to home after deletion
navigate('/');
};


return (
<button onClick={handleDelete} style={{ marginLeft: 8 }}>
Delete
</button>
);
};


export default DeleteRecipeButton;