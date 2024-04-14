import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchMovieById } from "../movies-api";
import css from "../components/pagesStyles/MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const location = useLocation();

  const goBack = useRef(location?.state ?? "/movies");

  useEffect(() => {
    const fetchDataDetails = async () => {
      try {
        const responseDetails = await fetchMovieById(id);
        setMovieDetails(responseDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataDetails();
  }, [id]);

  return (
    <>
      <div className={css.mainWrap}>
        <Link to={goBack.current} className={css.button}>
          Go back
        </Link>
        <div className={css.detailsMovieWrap}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={`${movieDetails.original_title}`}
            className={css.poster}
          />
          <h3>
            {movieDetails.original_title}
            {` (${movieDetails.release_date?.slice(0, 4)})`}
          </h3>
          <p>User score {Math.floor(movieDetails.vote_average * 10)}%</p>
        </div>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Geners</h3>
        <p>{movieDetails.genres?.map((gener) => gener.name + " ")}</p>
        <div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to={"cast"}>Cast</Link>
            </li>
            <li>
              <Link to={"reviews"}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetailsPage;
