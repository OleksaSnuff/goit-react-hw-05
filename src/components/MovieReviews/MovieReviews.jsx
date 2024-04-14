import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../movies-api";
import { Puff } from "react-loader-spinner";
import NotFoundPage from "../../pages/NotFoundPage";
import ReviewsList from "../ReviewsList/ReviewsList";

const MovieReviews = () => {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getFetchedMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetchMovieReviews(id);
        setMoviesReviews(response.results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getFetchedMovies();
  }, [id]);
  console.log(moviesReviews);
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
      {moviesReviews.length > 0 ? (
        <ReviewsList reviews={moviesReviews} />
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
      ;
    </>
  );
};
export default MovieReviews;
