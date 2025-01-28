import { useAppSelector } from '@/hooks/store/use-app-selector';
import { getAuthStatus } from '@/store/modules/auth';

import OfferReviewsForm from '~/offer/offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '~/offer/offer-reviews-list/offer-reviews-list';

import { Review } from '@/types/review';
import { AuthStatus } from '@/utils/consts';

type OfferReviewsProps = Readonly<{
  reviews: Review[];
}>;

function OfferReviews({ reviews }: OfferReviewsProps): JSX.Element {
  const isAuthed = useAppSelector(getAuthStatus) === AuthStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      {!!reviews.length && (
        <>
          <h2 className="reviews__title">
            Reviews &middot;{' '}
            <span className="reviews__amount">{reviews.length}</span>
          </h2>
          <OfferReviewsList reviews={reviews} />
        </>
      )}

      {isAuthed && <OfferReviewsForm />}
    </section>
  );
}

export default OfferReviews;
