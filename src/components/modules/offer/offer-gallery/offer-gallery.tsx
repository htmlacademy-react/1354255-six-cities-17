import { memo } from 'react';

type OfferGalleryProps = Readonly<{
  photoUrls: string[];
}>;

function Gallery({ photoUrls }: OfferGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {photoUrls.map((photoUrl) => (
          <div className="offer__image-wrapper" key={photoUrl}>
            <img className="offer__image" src={photoUrl} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export const OfferGallery = memo(Gallery);
