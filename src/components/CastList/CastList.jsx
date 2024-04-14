import css from "./CastList.module.css";
const CastList = ({ cast }) => {
  return (
    <div>
      <ul className={css.list}>
        {cast.slice(0, 10).map(
          ({ id, character, name, profile_path }) =>
            profile_path !== null && (
              <li key={id} className={css.castItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  className={css.castPhoto}
                />
                <p>Name {name}</p>
                <p>Character {character}</p>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default CastList;
