import React from 'react';
import { recipeStore } from './recipeStore';


const SearchBar = () => {
const searchTerm = recipeStore((s) => s.searchTerm);
const setSearchTerm = recipeStore((s) => s.setSearchTerm);


return (
<div style={{ marginBottom: 12 }}>
<input
type="text"
placeholder="Search by name, description, or ingredient..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
style={{ width: '100%', padding: 8, borderRadius: 6 }}
/>
</div>
);
};


export default SearchBar;