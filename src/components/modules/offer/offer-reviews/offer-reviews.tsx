import { Review } from '@/types/review';
import OfferReviewsForm from '~/offer/offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '~/offer/offer-reviews-list/offer-reviews-list';

type OfferReviewsProps = Readonly<{
  reviews: Review[];
}>

function OfferReviews({ reviews }: OfferReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      {
        !!reviews.length &&
        <>
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
          <OfferReviewsList reviews={reviews} />
        </>
      }

      <OfferReviewsForm />
    </section>
  );
}

export default OfferReviews;
