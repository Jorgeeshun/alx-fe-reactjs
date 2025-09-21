import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {
return (
<Router>
<div style={{ maxWidth: 900, margin: '20px auto', padding: '0 16px', fontFamily: 'system-ui, Arial' }}>
<header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
<h1><Link to="/">Recipe Sharing App</Link></h1>
<nav>
  <Link to="/">Home</Link> |{" "}
  <Link to="/favorites">My Favorites</Link> |{" "}
  <Link to="/recommendations">Recommendations</Link>
</nav>

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
<Route path="/favorites" element={<FavoritesList />} />
<Route path="/recommendations" element={<RecommendationsList />} />
</Routes>
</main>
</div>
</Router>
);
}


export default App;