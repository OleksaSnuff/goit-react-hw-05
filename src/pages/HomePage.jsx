import { fetchMovies } from "../movies-api";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { Puff } from "react-loader-spinner";
import NotFoundPage from "./NotFoundPage";

import css from "../components/pagesStyles/homePage.module.css";

const HomePage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFetchedMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovies();
        setMoviesData(response.results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getFetchedMovies();
  }, []);

  return (
    <>
      {isLoading && (
        <div className={css.spiner}>
          <Puff
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {error && <NotFoundPage />}

      <h2>Trending Today</h2>
      {moviesData.length > 0 && <MovieList moviesData={moviesData} />}
    </>
  );
};
export default HomePage;
