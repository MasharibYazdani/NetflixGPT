import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    removeNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = null;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    removePopularMovies: (state, action) => {
      state.popularMovies = null;
    },

    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    removeTopRated: (state, action) => {
      state.topRatedMovies = null;
    },

    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    removeUpcomingMovies: (state, action) => {
      state.upcomingMovies = null;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    removeTrailerVideo: (state, action) => {
      state.trailerVideo = null;
    },
  },
});

export const {
  addTopRatedMovies,
  addUpcomingMovies,
  addPopularMovies,
  addNowPlayingMovies,
  addTrailerVideo,

  removeNowPlayingMovies,
  removePopularMovies,
  removeTopRated,
  removeUpcomingMovies,
  removeTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
