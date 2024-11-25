import OfferReviewsForm from '~/offer/offer-reviews-form/offer-reviews-form';
import OfferReviewsList from '~/offer/offer-reviews-list/offer-reviews-list';

function OfferReviews(): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>

      <OfferReviewsList />
      <OfferReviewsForm />
    </section>
  );
}

export default OfferReviews;
