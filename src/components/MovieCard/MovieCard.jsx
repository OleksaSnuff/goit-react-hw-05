import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";

const MovieCard = ({ movie, state }) => {
  return (
    <Link to={`/movies/${movie.id}`} className={css.movieLink} state={state}>
      {movie.original_title}
    </Link>
  );
};
export default MovieCard;
