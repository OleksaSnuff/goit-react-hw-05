import { Puff } from "react-loader-spinner";
import NotFoundPage from "./NotFoundPage";
import { fetchMovieByQuery } from "../movies-api";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import toast, { Toaster } from "react-hot-toast";

import css from "../components/pagesStyles/moviesPage.module.css";
import { useSearchParams } from "react-router-dom";

const toastStyles = {
  borderRadius: "8px",
  background: "#333",
  color: "#fff",
};

const MoviesPage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get("q");

  useEffect(() => {
    if (!movie) return;
    const getFetchedMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieByQuery(movie);
        setMoviesData(response.results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getFetchedMovies();
  }, [movie]);

  const submitHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const formValue = form.elements.input.value;
    if (formValue.trim().length) {
      setSearchParams({ q: formValue });
    } else {
      toast.error("You haven't entered anything!", {
        style: toastStyles,
      });
    }
    e.target.elements.input.value = "";
  };
  console.log(moviesData);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

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

      <form className={css["form"]} onSubmit={submitHandler}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css["input"]}
        />
        <button type="submit" className={css["button"]}>
          Search
        </button>
      </form>

      {moviesData.length > 0 && <MovieList moviesData={moviesData} />}
    </>
  );
};
export default MoviesPage;
