import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && css.active, css.link);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink to={"/"} className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to={"/movies"} className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
