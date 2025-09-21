// src/App.jsx
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css'; // Assuming some basic styling

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr style={{ margin: '20px 0' }} />
      <RecipeList />
    </div>
  );
}

export default App;