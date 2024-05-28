import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptMovieNames: null,
    gptMoviesResult: null,
  },

  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },

    addGptMovieNames: (state, action) => {
      state.gptMovieNames = action.payload;
    },

    removeGptMovieNames: (state, action) => {
      state.gptMovieNames = null;
    },

    addGptMoviesResult: (state, action) => {
      state.gptMoviesResult = action.payload;
    },

    removeGptMoviesResult: (state, action) => {
      state.gptMovieNames = null;
    },
  },
});

export const {
  removeGptMovieNames,
  removeGptMoviesResult,
  addGptMovieNames,
  addGptMoviesResult,
  toggleGPTSearch,
} = gptSlice.actions;

export default gptSlice.reducer;
