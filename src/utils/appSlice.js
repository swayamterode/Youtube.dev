import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: localStorage.getItem("theme") || "light", // Initialize theme from localStorage
    isMenuOpen: true,
  },
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      state.theme = newTheme;
      localStorage.setItem("theme", newTheme); // Update localStorage when theme changes
      document.documentElement.classList.toggle("dark", newTheme === "dark"); // Apply the theme class to the document element
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleTheme, toggleMenu } = appSlice.actions;

export default appSlice.reducer;
