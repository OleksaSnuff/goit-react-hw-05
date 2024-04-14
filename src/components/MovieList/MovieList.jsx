import { useLocation } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MovieList.module.css";

const MovieList = ({ moviesData }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {moviesData.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieCard movie={movie} state={location} />
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;
