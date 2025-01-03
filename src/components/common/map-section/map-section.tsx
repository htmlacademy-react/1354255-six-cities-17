import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

import useMap from '@/hooks/useMap';
import { ValueOf } from '@/types/helpers';
import { ID } from '@/types/id';
import { OfferCard } from '@/types/offer';
import {
  MapType,
  UrlMarker
} from '@/utils/consts';

type MapSectionProps = Readonly<{
  type: ValueOf<typeof MapType>;
  offers: OfferCard[];
  selectedOfferId: ID | null;
}>

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.DEFAULT,
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.CURRENT,
});

function MapSection({ type, offers, selectedOfferId }: MapSectionProps): JSX.Element {
  const startCity = offers[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, startCity);

  useEffect(
    () => {
      if (map) {
        const markerLayer = layerGroup().addTo(map);

        offers.forEach((offer) => {
          const { latitude: lat, longitude: lng } = offer.location;

          const customIcon = (offer.id === selectedOfferId) ? currentCustomIcon : defaultCustomIcon;

          const marker = new Marker({ lat, lng });

          marker.setIcon(customIcon).addTo(markerLayer);
        });

        return () => {
          map.removeLayer(markerLayer);
        };
      }
    },
    [map, offers, selectedOfferId]);

  return (
    <section
      className={`${type}__map map`}
      ref={mapRef}
    >
    </section>
  );
}

export default MapSection;
