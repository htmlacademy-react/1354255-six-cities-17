import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import {
  fetchOfferComments,
  postOfferComments,
} from '@/store/modules/offer/api-actions';

import { MIN_CHARACTERS_IN_REVIEW } from '@/utils/consts';
import { isRequestOK } from '@/utils/helpers';
import { isReviewValid } from '@/utils/validators';

const RATING_STARS = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];

function OfferReviewsForm(): JSX.Element {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    rating: 0,
    comment: '',
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useAppDispatch();

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      rating: parseInt(evt.target.value, 10),
    });
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      comment: evt.target.value,
    });
  };

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      setIsDisabled(true);

      if (!isReviewValid(formValues) || !id) {
        return;
      }

      const response = await dispatch(
        postOfferComments({
          id,
          comment: formValues,
        })
      );

      if (isRequestOK(response)) {
        dispatch(fetchOfferComments(id));

        setFormValues({
          rating: 0,
          comment: '',
        });
      }
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_STARS.map(({ value, title }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleRatingChange}
              disabled={isDisabled}
            />

            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaChange}
        disabled={isDisabled}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {MIN_CHARACTERS_IN_REVIEW} characters
          </b>
          .
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isReviewValid(formValues) || isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
