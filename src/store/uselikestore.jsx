import { create } from "zustand";

export const useFavoriteStore = create((set) => {
  // Load the favorites from localStorage (if available)
  const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return {
    favorites: savedFavorites,
    toggleFavorite: (item) =>
      set(({ favorites }) => {
        const exists = favorites.some((fav) => fav.id === item.id); // Check if the item already exists
        let updatedFavorites;

        if (exists) {
          // If item exists, remove it
          updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
        } else {
          // If item doesn't exist, add it
          updatedFavorites = [...favorites, item];
        }

        // Save the updated favorites to localStorage
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        return {
          favorites: updatedFavorites,
        };
      }),
  };
});
