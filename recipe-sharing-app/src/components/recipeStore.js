import { create } from 'zustand';


export const recipeStore = create((set) => ({
recipes: [],


// add a new recipe (expects an object with at least { id, title, description })
addRecipe: (newRecipe) =>
set((state) => ({ recipes: [...state.recipes, newRecipe] })),


// update an existing recipe by id with `updatedFields` object
updateRecipe: (id, updatedFields) =>
set((state) => ({
recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updatedFields } : r)),
})),


// delete a recipe by id
deleteRecipe: (id) =>
set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),


// replace the entire list (useful for initialization)
setRecipes: (recipes) => set({ recipes }),
}));

export default recipeStore;