const PHOTO_URLS = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/apartment-01.jpg'
];

function OfferGallery(): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {
          PHOTO_URLS.map((photoUrl) => (
            <div className="offer__image-wrapper" key={photoUrl}>
              <img className="offer__image" src={photoUrl} alt="Photo studio" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default OfferGallery;
