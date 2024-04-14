import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjk5MGJkODcyMWQxNmM5NGY3NzE4NGJkODY4OTBhMyIsInN1YiI6IjY2MTgxNTJiZDhmNDRlMDE2MzJlYWEwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PXFfcsrCVtSNCf6HFUpA3GxJFifJvZBS6_tTCy0dSVM",
  },
};

const fetchMovies = async () => {
  const url = "trending/movie/day?language=en-US";
  const resp = await axios.get(url, options);
  return resp.data;
};

const fetchMovieById = async (movie_id) => {
  const url = `movie/${movie_id}?language=en-US`;
  const resp = await axios.get(url, options);
  return resp.data;
};

const fetchMovieCast = async (movie_id) => {
  const url = `movie/${movie_id}/credits?language=en-US`;
  const resp = await axios.get(url, options);
  return resp.data;
};
const fetchMovieReviews = async (movie_id) => {
  const url = `movie/${movie_id}/reviews?language=en-US`;
  const resp = await axios.get(url, options);
  return resp.data;
};
const fetchMovieByQuery = async (query) => {
  const url = `search/movie?query=${query}&language=en-US`;
  const resp = await axios.get(url, options);
  return resp.data;
};
export {
  fetchMovies,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieByQuery,
};
