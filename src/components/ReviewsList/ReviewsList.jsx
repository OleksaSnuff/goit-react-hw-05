import css from "./ReviewsList.module.css";

const ReviewsList = ({ reviews }) => {
  return (
    <>
      <ul className={css.reviewsList}>
        {reviews.slice(0, 5).map(({ id, author, content }) => {
          return (
            <li key={id} className={css.reviewsItem}>
              <h4 className={css.reviewsAuthor}>Author: {author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ReviewsList;
