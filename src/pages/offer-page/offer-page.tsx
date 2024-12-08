import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';

import Header from '@/components/common/header/header';
import MapSection from '@/components/common/map-section/map-section';
import OfferDescription from '~/offer/offer-description/offer-description';
import OfferGallery from '~/offer/offer-gallery/offer-gallery';
import OfferHost from '~/offer/offer-host/offer-host';
import OfferNearPlaces from '~/offer/offer-near-places/offer-near-places';
import OfferReviews from '~/offer/offer-reviews/offer-reviews';

import commentsApiService from '@/service/comments-api-service';
import offerApiService from '@/service/offer-api-service';
import { ValueOf } from '@/types/helpers';
import { AppRoute, AuthStatus, MapType } from '@/utils/consts';

type OfferPageProps = Readonly<{
  authStatus: ValueOf<typeof AuthStatus>;
}>

function OfferPage({ authStatus }: OfferPageProps): JSX.Element {
  const { id } = useParams();

  if (!id) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const offer = offerApiService.getOfferById(id);
  const reviews = commentsApiService.getCommentsById(id);
  const nearPlaces = offerApiService.getOffersNearBy(id);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      <Header authStatus={authStatus} />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery photoUrls={offer.images} />

          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferDescription offer={offer} />

              <OfferHost host={offer.host} />

              <div className="offer__description">
                <p className="offer__text">
                  {offer.description}
                </p>
              </div>

              <OfferReviews reviews={reviews}/>
            </div>
          </div>

          <MapSection type={MapType.Offer} />
        </section>

        <div className="container">
          <OfferNearPlaces places={nearPlaces} />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
