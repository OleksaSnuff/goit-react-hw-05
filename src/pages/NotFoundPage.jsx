import { Link } from "react-router-dom";
import css from "../components/pagesStyles/NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <>
      <Link to="/" className={css.button}>
        Go home
      </Link>
      <h2>Opps... Something gone wrong. Try to refresh page</h2>
    </>
  );
};
export default NotFoundPage;
