import { create } from 'zustand';


export const recipeStore = create((set, get) => ({
// core data
recipes: [],


// search / filter state
searchTerm: '',
filters: { ingredients: [], maxTime: null },
filteredRecipes: [],


// add a recipe and re-run filters
addRecipe: (newRecipe) => {
set((state) => ({ recipes: [...state.recipes, newRecipe] }));
get().filterRecipes();
},


// update a recipe and re-run filters
updateRecipe: (id, updatedFields) => {
set((state) => ({
recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updatedFields } : r)),
}));
get().filterRecipes();
},


// delete and re-run filters
deleteRecipe: (id) => {
set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) }));
get().filterRecipes();
},


// replace list and re-run filters (useful for initialization)
setRecipes: (recipes) => {
set({ recipes });
get().filterRecipes();
},


// update search term and re-run filters
setSearchTerm: (term) => {
set({ searchTerm: term });
get().filterRecipes();
},


// partial update of filters (e.g. { ingredients: [...], maxTime: 30 })
setFilters: (partial) => {
set((state) => ({ filters: { ...state.filters, ...partial } }));
get().filterRecipes();
},


// compute filteredRecipes from recipes, searchTerm and filters
filterRecipes: () => {
const { recipes, searchTerm, filters } = get();
const term = (searchTerm || '').trim().toLowerCase();
const ingredientFilters = (filters?.ingredients || []).map((i) => i.toLowerCase().trim()).filter(Boolean);
const maxTime = filters?.maxTime;


const filtered = recipes.filter((r) => {
const title = (r.title || '').toLowerCase();
const desc = (r.description || '').toLowerCase();
const ingredients = (r.ingredients || []).map((i) => (i || '').toLowerCase());
const prepTime = typeof r.prepTime === 'number' ? r.prepTime : r.prepTime ? Number(r.prepTime) : null;


// text match against title / description / ingredients
const matchesTerm =
!term ||
title.includes(term) ||
desc.includes(term) ||
ingredients.some((i) => i.includes(term));


// ingredient filters: every requested ingredient must exist in the recipe
const matchesIngredients =
ingredientFilters.length === 0 ||
ingredientFilters.every((f) => ingredients.some((i) => i.includes(f)));


// maxTime filter
const matchesTime = maxTime == null || (prepTime != null && prepTime <= maxTime);


return matchesTerm && matchesIngredients && matchesTime;
});


set({ filteredRecipes: filtered });
},
}));

export default recipeStore;