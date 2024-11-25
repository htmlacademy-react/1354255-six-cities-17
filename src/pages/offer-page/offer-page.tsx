import { Helmet } from 'react-helmet-async';

import Header from '@/components/common/header/header';
import OfferDescription from '~/offer/offer-description/offer-description';
import OfferGallery from '~/offer/offer-gallery/offer-gallery';
import OfferHost from '~/offer/offer-host/offer-host';
import OfferMap from '~/offer/offer-map/offer-map';
import OfferReviews from '~/offer/offer-near-places/offer-near-places';
import OfferNearPlaces from '~/offer/offer-reviews/offer-reviews';

import { ValueOf } from '@/types/helpers';
import { AuthStatus } from '@/utils/consts';

type OfferPageProps = Readonly<{
  authStatus: ValueOf<typeof AuthStatus>;
}>

function OfferPage({ authStatus }: OfferPageProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header authStatus={authStatus} />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery />

          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferDescription />
              <OfferHost />
              <OfferReviews />
            </div>
          </div>

          <OfferMap />
        </section>

        <div className="container">
          <OfferNearPlaces />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
