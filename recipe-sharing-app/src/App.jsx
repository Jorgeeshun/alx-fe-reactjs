import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';


function App() {
return (
<Router>
<div style={{ maxWidth: 900, margin: '20px auto', padding: '0 16px', fontFamily: 'system-ui, Arial' }}>
<header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
<h1><Link to="/">Recipe Sharing App</Link></h1>
</header>


<main>
<Routes>
<Route
path="/"
element={(
<>
<SearchBar />
<Filters />
<AddRecipeForm />
<RecipeList />
</>
)}
/>


<Route path="/recipes/:id" element={<RecipeDetails />} />
<Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
</Routes>
</main>
</div>
</Router>
);
}


export default App;