import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/store/useAppDispatch';
import { useAppSelector } from '@/hooks/store/useAppSelector';
import useSelectedPoint from '@/hooks/useSelectedPoint';
import {
  fetchNearbyOffers,
  fetchOfferComments,
  getOfferByID,
} from '@/store/modules/offer/api-actions';
import {
  getNearPlaces,
  getOffer,
  getReviews,
} from '@/store/modules/offer/selectors';

import Header from '@/components/common/header/header';
import Loader from '@/components/common/loader/loader';
import MapSection from '@/components/common/map-section/map-section';
import OfferDescription from '~/offer/offer-description/offer-description';
import OfferGallery from '~/offer/offer-gallery/offer-gallery';
import OfferHost from '~/offer/offer-host/offer-host';
import OfferNearPlaces from '~/offer/offer-near-places/offer-near-places';
import OfferReviews from '~/offer/offer-reviews/offer-reviews';

import { AppRoute, MapType, NEAR_PLACES_TO_SHOW } from '@/utils/consts';
import { isRequestOK } from '@/utils/helpers';

function OfferPage(): JSX.Element {
  const { id } = useParams();

  const { selectedPointId, handleSelectedPointState } = useSelectedPoint(id);
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const nearPlaces = useAppSelector(getNearPlaces).slice(
    0,
    NEAR_PLACES_TO_SHOW
  );
  const reviews = useAppSelector(getReviews);

  const [isLoading, setIsLoading] = useState(true);

  const getOfferInfo = useCallback(
    async (offerId: string) => {
      const response = await dispatch(getOfferByID(offerId));

      if (isRequestOK(response)) {
        await Promise.all([
          dispatch(fetchNearbyOffers(offerId)),
          dispatch(fetchOfferComments(offerId)),
        ]);

        setIsLoading(false);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (id) {
      getOfferInfo(id);
    }
  }, [id, dispatch, getOfferInfo]);

  if (!offer && !isLoading) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: offer</title>
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <main className="page__main page__main--offer">
            <section className="offer">
              <OfferGallery photoUrls={offer!.images} />

              <div className="offer__container container">
                <div className="offer__wrapper">
                  <OfferDescription offer={offer!} />

                  <OfferHost host={offer!.host} />

                  <div className="offer__description">
                    <p className="offer__text">{offer!.description}</p>
                  </div>

                  <OfferReviews reviews={reviews} />
                </div>
              </div>

              <MapSection
                type={MapType.Offer}
                offers={nearPlaces}
                selectedOfferId={selectedPointId}
              />
            </section>

            <div className="container">
              <OfferNearPlaces
                places={nearPlaces}
                onMouseOver={handleSelectedPointState}
                onMouseLeave={handleSelectedPointState}
              />
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default OfferPage;
