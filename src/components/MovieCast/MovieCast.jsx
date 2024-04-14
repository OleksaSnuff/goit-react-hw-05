import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../movies-api";
import { Puff } from "react-loader-spinner";
import NotFoundPage from "../../pages/NotFoundPage";
import { useParams } from "react-router-dom";
import CastList from "../CastList/CastList";

const MovieCast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getFetchedMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetchMovieCast(id);
        setMoviesCast(response.cast);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getFetchedMovies();
  }, [id]);

  return (
    <>
      {isLoading && (
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {error && <NotFoundPage />}
      {moviesCast.length > 0 && <CastList cast={moviesCast} />};
    </>
  );
};
export default MovieCast;
