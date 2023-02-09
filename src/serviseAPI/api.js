import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const KEY = "53502f2051b49635b4821c401e9fb0d7";

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${KEY}`)
  return response.data;
};

export const getSearchMovies = async (query) => {
  const response = await axios.get(`/search/movie?api_key=${KEY}&query=${encodeURIComponent(query).replaceAll('%20', '+')}&language=en-US`)
  return response.data;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?api_key=${KEY}`)
  return response.data;
};

export const getCreditsMovie = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}`)
  return response.data;
};

export const getReviewsMovie = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`)
  return response.data;
};


