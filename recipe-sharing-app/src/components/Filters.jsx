import React, { useState, useEffect } from 'react';
import { recipeStore } from './recipeStore';


const Filters = () => {
const filters = recipeStore((s) => s.filters);
const setFilters = recipeStore((s) => s.setFilters);


const [ingredientInput, setIngredientInput] = useState((filters.ingredients || []).join(', '));
const [maxTimeInput, setMaxTimeInput] = useState(filters.maxTime ?? '');


useEffect(() => {
setIngredientInput((filters.ingredients || []).join(', '));
setMaxTimeInput(filters.maxTime ?? '');
}, [filters]);


const applyIngredientFilter = (value) => {
const arr = value
.split(',')
.map((s) => s.trim())
.filter(Boolean);
setFilters({ ingredients: arr });
};


const applyMaxTimeFilter = (value) => {
const v = value === '' ? null : Number(value);
setFilters({ maxTime: v });
};


return (
<div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
<input
placeholder="Ingredients (comma-separated)"
value={ingredientInput}
onChange={(e) => {
setIngredientInput(e.target.value);
applyIngredientFilter(e.target.value);
}}
style={{ flex: 1, padding: 8, borderRadius: 6 }}
/>


<input
type="number"
placeholder="Max prep time (min)"
value={maxTimeInput}
onChange={(e) => {
setMaxTimeInput(e.target.value);
applyMaxTimeFilter(e.target.value);
}}
style={{ width: 160, padding: 8, borderRadius: 6 }}
/>
</div>
);
};


export default Filters;