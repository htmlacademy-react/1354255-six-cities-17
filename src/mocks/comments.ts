import { Review } from '@/types/review';

const MOCK_COMMENTS: Record<string, Review[]> = {
  '09c74efc-cacd-47e6-921e-a7a7a832620a': [
    {
      'id': '74b66d1e-cd37-4f79-b2d4-4749598fc3c9',
      'comment': 'I stayed here for one night and it was an unpleasant experience.',
      'date': '2024-11-08T21:00:00.027Z',
      'rating': 2,
      'user': {
        'name': 'Zak',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
        'isPro': false
      }
    },
    {
      'id': '91b6dbfc-2edd-4c40-b537-d03b0b65cb44',
      'comment': 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
      'date': '2024-11-07T21:00:00.027Z',
      'rating': 4,
      'user': {
        'name': 'Isaac',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/4.jpg',
        'isPro': true
      }
    }
  ],
  '0a600ef6-3768-4ccc-b53f-4f0997643b69': [
    {
      'id': '2cd83d4e-9de4-4930-bc8a-9d36cfed2911',
      'comment': 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
      'date': '2024-11-09T21:00:00.027Z',
      'rating': 2,
      'user': {
        'name': 'Max',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/2.jpg',
        'isPro': true
      }
    }
  ],
  '31e06a33-eda0-4629-8e7d-0ebc62dbc04c': [],
  '36d9ad04-73f5-46f6-9650-288b59a6739e': [
    {
      'id': '2bf67fc9-6964-458b-b320-45b97423d1ca',
      'comment': 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
      'date': '2024-11-07T21:00:00.027Z',
      'rating': 2,
      'user': {
        'name': 'Corey',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/5.jpg',
        'isPro': false
      }
    },
    {
      'id': '3518d8d9-1459-423d-a7b5-4f734615242d',
      'comment': 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
      'date': '2024-11-04T21:00:00.027Z',
      'rating': 1,
      'user': {
        'name': 'Mollie',
        'avatarUrl': 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
        'isPro': false
      }
    }
  ]
};

export { MOCK_COMMENTS };
