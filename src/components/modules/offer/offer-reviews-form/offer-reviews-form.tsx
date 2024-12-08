import commentsApiService from '@/service/comments-api-service';
import { ChangeEvent, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

const RATING_STARS = [
  {
    value: 5,
    title: 'perfect'
  },
  {
    value: 4,
    title: 'good'
  },
  {
    value: 3,
    title: 'not bad'
  },
  {
    value: 2,
    title: 'badly'
  },
  {
    value: 1,
    title: 'terribly'
  },
];

function OfferReviewsForm(): JSX.Element {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    rating: 0,
    comment: ''
  });

  const onRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      rating: parseInt(evt.target.value, 10)
    });
  };

  const onTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      comment: evt.target.value
    });
  };

  const onFormSubmit = () => {
    if (!commentsApiService.isCommentValid(formValues)) {
      return;
    }

    commentsApiService.sendComment(id!, formValues);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATING_STARS.map(({ value, title }) => (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={onRatingChange}
              />

              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onTextareaChange}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled onSubmit={onFormSubmit}>Submit</button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
