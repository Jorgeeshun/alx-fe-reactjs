import { create } from 'zustand';


export const useRecipeStore = create((set, get) => ({
// core data
recipes: [],


// search / filter state
searchTerm: '',
filters: { ingredients: [], maxTime: null },
filteredRecipes: [],
favourites: [],
recommendations: [],

// add a recipe and re-run filters
  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return { recipes: updated };
    }),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return { recipes: updated };
    }),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== recipeId),
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  setRecipes: (recipes) => set({ recipes }),

  // Search & filter
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilters: (filters) => set({ filters }),
  filterRecipes: () =>
    set((state) => {
      let filtered = state.recipes;

      if (state.searchTerm) {
        filtered = filtered.filter(
          (r) =>
            r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            r.description.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            (r.ingredients &&
              r.ingredients.some((ing) =>
                ing.toLowerCase().includes(state.searchTerm.toLowerCase())
              ))
        );
      }

      if (state.filters.ingredients) {
        const searchIngs = state.filters.ingredients
          .split(',')
          .map((ing) => ing.trim().toLowerCase());
        filtered = filtered.filter((r) =>
          searchIngs.every((ing) =>
            r.ingredients?.map((i) => i.toLowerCase()).includes(ing)
          )
        );
      }

      if (state.filters.maxTime) {
        filtered = filtered.filter(
          (r) => r.prepTime && r.prepTime <= state.filters.maxTime
        );
      }

      return { filteredRecipes: filtered };
    }),

  // Favorites
  addFavorite: (recipeId) =>
    set((state) =>
      state.favorites.includes(recipeId)
        ? {}
        : { favorites: [...state.favorites, recipeId] }
    ),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations (mock logic)
  generateRecommendations: () =>
    set((state) => {
      if (state.favorites.length === 0) return { recommendations: [] };

      const favoriteRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );

      // Example: recommend recipes that share at least 1 ingredient with favorites
      const favoriteIngredients = favoriteRecipes.flatMap((r) => r.ingredients || []);
      const recommended = state.recipes.filter(
        (r) =>
          !state.favorites.includes(r.id) &&
          r.ingredients?.some((ing) =>
            favoriteIngredients.map((fi) => fi.toLowerCase()).includes(ing.toLowerCase())
          )
      );

      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;