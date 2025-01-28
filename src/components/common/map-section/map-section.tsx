import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useRef } from 'react';

import useMap from '@/hooks/use-map';
import { ValueOf } from '@/types/helpers';
import { ID } from '@/types/id';
import { OfferCard, OfferFull } from '@/types/offer';
import { MapType, UrlMarker } from '@/utils/consts';

type MapSectionProps = Readonly<{
  type: ValueOf<typeof MapType>;
  offers: OfferCard[];
  selectedOfferId: ID | null;
  currentOffer?: OfferFull;
}>;

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.DEFAULT,
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.CURRENT,
});

function MapSection({
  type,
  offers,
  selectedOfferId,
  currentOffer,
}: MapSectionProps): JSX.Element {
  const startCity = currentOffer?.city ?? offers[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, startCity);

  const offerMarkers: Array<OfferCard | OfferFull> = useMemo(
    () => [...offers],
    [offers]
  );

  if (currentOffer) {
    offerMarkers.push(currentOffer);
  }

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offerMarkers.forEach((offer) => {
        const { latitude: lat, longitude: lng } = offer.location;

        const customIcon =
          offer.id === selectedOfferId ? currentCustomIcon : defaultCustomIcon;

        const marker = new Marker({ lat, lng });

        marker.setIcon(customIcon).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offerMarkers, selectedOfferId]);

  return <section className={`${type}__map map`} ref={mapRef}></section>;
}

export default MapSection;
