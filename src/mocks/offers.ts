import { OfferCard, OfferFull } from '@/types/offer';

const MOCK_OFFERS: OfferCard[] = [
  {
    'id': '09c74efc-cacd-47e6-921e-a7a7a832620a',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 458,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': '0a600ef6-3768-4ccc-b53f-4f0997643b69',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 335,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.6
  },
  {
    'id': '31e06a33-eda0-4629-8e7d-0ebc62dbc04c',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 184,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': '36d9ad04-73f5-46f6-9650-288b59a6739e',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 929,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2.3
  },
];

const MOCK_OFFERS_BY_ID: Record<string, OfferFull> = {
  '09c74efc-cacd-47e6-921e-a7a7a832620a': {
    'id': '09c74efc-cacd-47e6-921e-a7a7a832620a',
    'title': 'The Joshua Tree House',
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'type': 'apartment',
    'price': 458,
    'images': [
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/16.jpg'
    ],
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'goods': [
      'Coffee machine',
      'Wi-Fi',
      'Baby seat',
      'Cable TV',
      'Dishwasher',
      'Towels',
      'Washing machine',
      'Laptop friendly workspace',
      'Air conditioning',
      'Breakfast',
      'Heating',
      'Washer'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 3.7,
    'bedrooms': 2,
    'maxAdults': 4
  },
  '0a600ef6-3768-4ccc-b53f-4f0997643b69': {
    'id': '0a600ef6-3768-4ccc-b53f-4f0997643b69',
    'title': 'Loft Studio in the Central Area',
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'type': 'apartment',
    'price': 335,
    'images': [
      'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/15.jpg'
    ],
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Dishwasher',
      'Breakfast',
      'Baby seat',
      'Coffee machine',
      'Washer',
      'Air conditioning',
      'Kitchen',
      'Washing machine'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 1.6,
    'bedrooms': 3,
    'maxAdults': 7
  },
  '31e06a33-eda0-4629-8e7d-0ebc62dbc04c': {
    'id': '31e06a33-eda0-4629-8e7d-0ebc62dbc04c',
    'title': 'Loft Studio in the Central Area',
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'type': 'room',
    'price': 184,
    'images': [
      'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Fridge',
      'Towels',
      'Breakfast',
      'Laptop friendly workspace',
      'Kitchen',
      'Dishwasher',
      'Baby seat',
      'Cable TV',
      'Heating',
      'Coffee machine',
      'Washing machine'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 3.5,
    'bedrooms': 1,
    'maxAdults': 1
  },
  '36d9ad04-73f5-46f6-9650-288b59a6739e': {
    'id': '36d9ad04-73f5-46f6-9650-288b59a6739e',
    'title': 'Wood and stone place',
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'type': 'house',
    'price': 929,
    'images': [
      'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/9.jpg'
    ],
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'goods': [
      'Washing machine',
      'Kitchen',
      'Washer',
      'Laptop friendly workspace',
      'Baby seat',
      'Cable TV',
      'Dishwasher',
      'Fridge',
      'Air conditioning',
      'Breakfast',
      'Coffee machine',
      'Wi-Fi',
      'Heating'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 2.3,
    'bedrooms': 5,
    'maxAdults': 8
  }
};

const MOCK_OFFERS_NEARBY: Record<string, OfferCard[]> = {
  '09c74efc-cacd-47e6-921e-a7a7a832620a': [
    {
      'id': '0a600ef6-3768-4ccc-b53f-4f0997643b69',
      'title': 'Loft Studio in the Central Area',
      'type': 'apartment',
      'price': 335,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.858610000000006,
        'longitude': 2.330499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 1.6
    },
    {
      'id': '31e06a33-eda0-4629-8e7d-0ebc62dbc04c',
      'title': 'Loft Studio in the Central Area',
      'type': 'room',
      'price': 184,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.834610000000005,
        'longitude': 2.335499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.5
    },
    {
      'id': '36d9ad04-73f5-46f6-9650-288b59a6739e',
      'title': 'Wood and stone place',
      'type': 'house',
      'price': 929,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.85761,
        'longitude': 2.358499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 2.3
    },
    {
      'id': 'b9b569ed-e2f7-4e57-9bbb-4faac1033396',
      'title': 'Penthouse, 4-5 rooms + 5 balconies',
      'type': 'hotel',
      'price': 303,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87561,
        'longitude': 2.375499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.7
    },
    {
      'id': 'ec36299e-31b1-4f0a-badf-cc03001e4ac0',
      'title': 'Tile House',
      'type': 'apartment',
      'price': 279,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87961000000001,
        'longitude': 2.353499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.4
    },
    {
      'id': '762eaa17-ef0c-412c-aa65-ddd34c3d6e9a',
      'title': 'Waterfront with extraordinary view',
      'type': 'hotel',
      'price': 382,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.834610000000005,
        'longitude': 2.364499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.5
    },
    {
      'id': 'ee893bc0-18ac-43f7-a534-17c9a24a27d8',
      'title': 'Amazing and Extremely Central Flat',
      'type': 'house',
      'price': 508,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.837610000000005,
        'longitude': 2.3454990000000002,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3
    },
    {
      'id': '21c45ca8-84c3-467c-b3ce-91780deebbb2',
      'title': 'House in countryside',
      'type': 'apartment',
      'price': 406,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.84761,
        'longitude': 2.356499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.3
    },
    {
      'id': '546b3c13-9327-42f8-af38-5b39c42233ce',
      'title': 'The house among olive ',
      'type': 'apartment',
      'price': 365,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.862610000000004,
        'longitude': 2.369499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 5
    },
    {
      'id': '3a7414b0-61e8-4fd4-99b8-01c71e66e474',
      'title': 'The Pondhouse - A Magical Place',
      'type': 'house',
      'price': 652,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.83861,
        'longitude': 2.350499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.8
    },
    {
      'id': 'e92b93d7-f3b8-446f-a9a2-6bd817d01224',
      'title': 'Tile House',
      'type': 'hotel',
      'price': 226,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.861610000000006,
        'longitude': 2.340499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.6
    },
    {
      'id': 'e2f93383-23a3-44f7-bdce-d73c7c2e746b',
      'title': 'The Joshua Tree House',
      'type': 'house',
      'price': 984,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87861,
        'longitude': 2.357499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.7
    },
    {
      'id': 'a5b1c8d1-1233-43d7-bcea-2d0ab2ebca93',
      'title': 'Waterfront with extraordinary view',
      'type': 'house',
      'price': 999,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.877610000000004,
        'longitude': 2.333499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3
    },
    {
      'id': 'ee9b4072-5685-4cbf-9501-843e9178b2e7',
      'title': 'Tile House',
      'type': 'hotel',
      'price': 322,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.83961,
        'longitude': 2.342499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.6
    },
    {
      'id': '07207de1-2f90-4ed9-ac51-5d883455a3de',
      'title': 'Penthouse, 4-5 rooms + 5 balconies',
      'type': 'apartment',
      'price': 206,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.865610000000004,
        'longitude': 2.350499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.7
    },
    {
      'id': '62454e32-2b6f-4cf0-bc86-410b66feacac',
      'title': 'Waterfront with extraordinary view',
      'type': 'hotel',
      'price': 239,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.846610000000005,
        'longitude': 2.374499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 2.8
    },
    {
      'id': 'daa3ac80-84d3-4001-8c46-54f88c4458e6',
      'title': 'Wood and stone place',
      'type': 'room',
      'price': 159,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.837610000000005,
        'longitude': 2.364499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.1
    },
    {
      'id': '5c5167d6-cc7d-4f4b-9c78-76fb909ec492',
      'title': 'Canal View Prinsengracht',
      'type': 'room',
      'price': 228,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.843610000000005,
        'longitude': 2.338499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 2.8
    },
    {
      'id': '7d63ecad-a3d1-4a92-ae1e-52fda7f8a389',
      'title': 'Loft Studio in the Central Area',
      'type': 'house',
      'price': 913,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.84461,
        'longitude': 2.374499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 4.2
    }
  ],
  '0a600ef6-3768-4ccc-b53f-4f0997643b69': [
    {
      'id': '09c74efc-cacd-47e6-921e-a7a7a832620a',
      'title': 'The Joshua Tree House',
      'type': 'apartment',
      'price': 458,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.868610000000004,
        'longitude': 2.342499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.7
    },
    {
      'id': '31e06a33-eda0-4629-8e7d-0ebc62dbc04c',
      'title': 'Loft Studio in the Central Area',
      'type': 'room',
      'price': 184,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.834610000000005,
        'longitude': 2.335499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.5
    },
    {
      'id': '36d9ad04-73f5-46f6-9650-288b59a6739e',
      'title': 'Wood and stone place',
      'type': 'house',
      'price': 929,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.85761,
        'longitude': 2.358499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 2.3
    },
    {
      'id': 'b9b569ed-e2f7-4e57-9bbb-4faac1033396',
      'title': 'Penthouse, 4-5 rooms + 5 balconies',
      'type': 'hotel',
      'price': 303,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87561,
        'longitude': 2.375499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.7
    },
    {
      'id': 'ec36299e-31b1-4f0a-badf-cc03001e4ac0',
      'title': 'Tile House',
      'type': 'apartment',
      'price': 279,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87961000000001,
        'longitude': 2.353499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.4
    },
    {
      'id': '762eaa17-ef0c-412c-aa65-ddd34c3d6e9a',
      'title': 'Waterfront with extraordinary view',
      'type': 'hotel',
      'price': 382,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.834610000000005,
        'longitude': 2.364499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.5
    },
    {
      'id': 'ee893bc0-18ac-43f7-a534-17c9a24a27d8',
      'title': 'Amazing and Extremely Central Flat',
      'type': 'house',
      'price': 508,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.837610000000005,
        'longitude': 2.3454990000000002,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3
    },
    {
      'id': '21c45ca8-84c3-467c-b3ce-91780deebbb2',
      'title': 'House in countryside',
      'type': 'apartment',
      'price': 406,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.84761,
        'longitude': 2.356499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.3
    },
    {
      'id': '546b3c13-9327-42f8-af38-5b39c42233ce',
      'title': 'The house among olive ',
      'type': 'apartment',
      'price': 365,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.862610000000004,
        'longitude': 2.369499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 5
    },
    {
      'id': '3a7414b0-61e8-4fd4-99b8-01c71e66e474',
      'title': 'The Pondhouse - A Magical Place',
      'type': 'house',
      'price': 652,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.83861,
        'longitude': 2.350499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.8
    },
    {
      'id': 'e92b93d7-f3b8-446f-a9a2-6bd817d01224',
      'title': 'Tile House',
      'type': 'hotel',
      'price': 226,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.861610000000006,
        'longitude': 2.340499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.6
    },
    {
      'id': 'e2f93383-23a3-44f7-bdce-d73c7c2e746b',
      'title': 'The Joshua Tree House',
      'type': 'house',
      'price': 984,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87861,
        'longitude': 2.357499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.7
    },
    {
      'id': 'a5b1c8d1-1233-43d7-bcea-2d0ab2ebca93',
      'title': 'Waterfront with extraordinary view',
      'type': 'house',
      'price': 999,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.877610000000004,
        'longitude': 2.333499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3
    },
    {
      'id': 'ee9b4072-5685-4cbf-9501-843e9178b2e7',
      'title': 'Tile House',
      'type': 'hotel',
      'price': 322,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.83961,
        'longitude': 2.342499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.6
    },
    {
      'id': '07207de1-2f90-4ed9-ac51-5d883455a3de',
      'title': 'Penthouse, 4-5 rooms + 5 balconies',
      'type': 'apartment',
      'price': 206,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.865610000000004,
        'longitude': 2.350499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.7
    },
    {
      'id': '62454e32-2b6f-4cf0-bc86-410b66feacac',
      'title': 'Waterfront with extraordinary view',
      'type': 'hotel',
      'price': 239,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.846610000000005,
        'longitude': 2.374499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 2.8
    },
    {
      'id': 'daa3ac80-84d3-4001-8c46-54f88c4458e6',
      'title': 'Wood and stone place',
      'type': 'room',
      'price': 159,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.837610000000005,
        'longitude': 2.364499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.1
    },
    {
      'id': '5c5167d6-cc7d-4f4b-9c78-76fb909ec492',
      'title': 'Canal View Prinsengracht',
      'type': 'room',
      'price': 228,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.843610000000005,
        'longitude': 2.338499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 2.8
    },
    {
      'id': '7d63ecad-a3d1-4a92-ae1e-52fda7f8a389',
      'title': 'Loft Studio in the Central Area',
      'type': 'house',
      'price': 913,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.84461,
        'longitude': 2.374499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 4.2
    }
  ],
  '31e06a33-eda0-4629-8e7d-0ebc62dbc04c': [
    {
      'id': '09c74efc-cacd-47e6-921e-a7a7a832620a',
      'title': 'The Joshua Tree House',
      'type': 'apartment',
      'price': 458,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.868610000000004,
        'longitude': 2.342499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.7
    },
    {
      'id': '0a600ef6-3768-4ccc-b53f-4f0997643b69',
      'title': 'Loft Studio in the Central Area',
      'type': 'apartment',
      'price': 335,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.858610000000006,
        'longitude': 2.330499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 1.6
    },
    {
      'id': '36d9ad04-73f5-46f6-9650-288b59a6739e',
      'title': 'Wood and stone place',
      'type': 'house',
      'price': 929,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.85761,
        'longitude': 2.358499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 2.3
    },
    {
      'id': 'b9b569ed-e2f7-4e57-9bbb-4faac1033396',
      'title': 'Penthouse, 4-5 rooms + 5 balconies',
      'type': 'hotel',
      'price': 303,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87561,
        'longitude': 2.375499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.7
    },
    {
      'id': 'ec36299e-31b1-4f0a-badf-cc03001e4ac0',
      'title': 'Tile House',
      'type': 'apartment',
      'price': 279,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87961000000001,
        'longitude': 2.353499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.4
    },
    {
      'id': '762eaa17-ef0c-412c-aa65-ddd34c3d6e9a',
      'title': 'Waterfront with extraordinary view',
      'type': 'hotel',
      'price': 382,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.834610000000005,
        'longitude': 2.364499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.5
    },
    {
      'id': 'ee893bc0-18ac-43f7-a534-17c9a24a27d8',
      'title': 'Amazing and Extremely Central Flat',
      'type': 'house',
      'price': 508,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.837610000000005,
        'longitude': 2.3454990000000002,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3
    },
    {
      'id': '21c45ca8-84c3-467c-b3ce-91780deebbb2',
      'title': 'House in countryside',
      'type': 'apartment',
      'price': 406,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.84761,
        'longitude': 2.356499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.3
    },
    {
      'id': '546b3c13-9327-42f8-af38-5b39c42233ce',
      'title': 'The house among olive ',
      'type': 'apartment',
      'price': 365,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.862610000000004,
        'longitude': 2.369499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 5
    },
    {
      'id': '3a7414b0-61e8-4fd4-99b8-01c71e66e474',
      'title': 'The Pondhouse - A Magical Place',
      'type': 'house',
      'price': 652,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.83861,
        'longitude': 2.350499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.8
    },
    {
      'id': 'e92b93d7-f3b8-446f-a9a2-6bd817d01224',
      'title': 'Tile House',
      'type': 'hotel',
      'price': 226,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.861610000000006,
        'longitude': 2.340499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.6
    },
    {
      'id': 'e2f93383-23a3-44f7-bdce-d73c7c2e746b',
      'title': 'The Joshua Tree House',
      'type': 'house',
      'price': 984,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87861,
        'longitude': 2.357499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.7
    },
    {
      'id': 'a5b1c8d1-1233-43d7-bcea-2d0ab2ebca93',
      'title': 'Waterfront with extraordinary view',
      'type': 'house',
      'price': 999,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.877610000000004,
        'longitude': 2.333499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3
    },
    {
      'id': 'ee9b4072-5685-4cbf-9501-843e9178b2e7',
      'title': 'Tile House',
      'type': 'hotel',
      'price': 322,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.83961,
        'longitude': 2.342499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.6
    },
    {
      'id': '07207de1-2f90-4ed9-ac51-5d883455a3de',
      'title': 'Penthouse, 4-5 rooms + 5 balconies',
      'type': 'apartment',
      'price': 206,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.865610000000004,
        'longitude': 2.350499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.7
    },
    {
      'id': '62454e32-2b6f-4cf0-bc86-410b66feacac',
      'title': 'Waterfront with extraordinary view',
      'type': 'hotel',
      'price': 239,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.846610000000005,
        'longitude': 2.374499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 2.8
    },
    {
      'id': 'daa3ac80-84d3-4001-8c46-54f88c4458e6',
      'title': 'Wood and stone place',
      'type': 'room',
      'price': 159,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.837610000000005,
        'longitude': 2.364499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.1
    },
    {
      'id': '5c5167d6-cc7d-4f4b-9c78-76fb909ec492',
      'title': 'Canal View Prinsengracht',
      'type': 'room',
      'price': 228,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.843610000000005,
        'longitude': 2.338499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 2.8
    },
    {
      'id': '7d63ecad-a3d1-4a92-ae1e-52fda7f8a389',
      'title': 'Loft Studio in the Central Area',
      'type': 'house',
      'price': 913,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.84461,
        'longitude': 2.374499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 4.2
    }
  ],
  '36d9ad04-73f5-46f6-9650-288b59a6739e': [
    {
      'id': '09c74efc-cacd-47e6-921e-a7a7a832620a',
      'title': 'The Joshua Tree House',
      'type': 'apartment',
      'price': 458,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.868610000000004,
        'longitude': 2.342499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.7
    },
    {
      'id': '0a600ef6-3768-4ccc-b53f-4f0997643b69',
      'title': 'Loft Studio in the Central Area',
      'type': 'apartment',
      'price': 335,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.858610000000006,
        'longitude': 2.330499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 1.6
    },
    {
      'id': '31e06a33-eda0-4629-8e7d-0ebc62dbc04c',
      'title': 'Loft Studio in the Central Area',
      'type': 'room',
      'price': 184,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.834610000000005,
        'longitude': 2.335499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.5
    },
    {
      'id': 'b9b569ed-e2f7-4e57-9bbb-4faac1033396',
      'title': 'Penthouse, 4-5 rooms + 5 balconies',
      'type': 'hotel',
      'price': 303,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87561,
        'longitude': 2.375499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.7
    },
    {
      'id': 'ec36299e-31b1-4f0a-badf-cc03001e4ac0',
      'title': 'Tile House',
      'type': 'apartment',
      'price': 279,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87961000000001,
        'longitude': 2.353499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.4
    },
    {
      'id': '762eaa17-ef0c-412c-aa65-ddd34c3d6e9a',
      'title': 'Waterfront with extraordinary view',
      'type': 'hotel',
      'price': 382,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.834610000000005,
        'longitude': 2.364499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.5
    },
    {
      'id': 'ee893bc0-18ac-43f7-a534-17c9a24a27d8',
      'title': 'Amazing and Extremely Central Flat',
      'type': 'house',
      'price': 508,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.837610000000005,
        'longitude': 2.3454990000000002,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3
    },
    {
      'id': '21c45ca8-84c3-467c-b3ce-91780deebbb2',
      'title': 'House in countryside',
      'type': 'apartment',
      'price': 406,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.84761,
        'longitude': 2.356499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.3
    },
    {
      'id': '546b3c13-9327-42f8-af38-5b39c42233ce',
      'title': 'The house among olive ',
      'type': 'apartment',
      'price': 365,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.862610000000004,
        'longitude': 2.369499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 5
    },
    {
      'id': '3a7414b0-61e8-4fd4-99b8-01c71e66e474',
      'title': 'The Pondhouse - A Magical Place',
      'type': 'house',
      'price': 652,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.83861,
        'longitude': 2.350499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.8
    },
    {
      'id': 'e92b93d7-f3b8-446f-a9a2-6bd817d01224',
      'title': 'Tile House',
      'type': 'hotel',
      'price': 226,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.861610000000006,
        'longitude': 2.340499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3.6
    },
    {
      'id': 'e2f93383-23a3-44f7-bdce-d73c7c2e746b',
      'title': 'The Joshua Tree House',
      'type': 'house',
      'price': 984,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.87861,
        'longitude': 2.357499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.7
    },
    {
      'id': 'a5b1c8d1-1233-43d7-bcea-2d0ab2ebca93',
      'title': 'Waterfront with extraordinary view',
      'type': 'house',
      'price': 999,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.877610000000004,
        'longitude': 2.333499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 3
    },
    {
      'id': 'ee9b4072-5685-4cbf-9501-843e9178b2e7',
      'title': 'Tile House',
      'type': 'hotel',
      'price': 322,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.83961,
        'longitude': 2.342499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 4.6
    },
    {
      'id': '07207de1-2f90-4ed9-ac51-5d883455a3de',
      'title': 'Penthouse, 4-5 rooms + 5 balconies',
      'type': 'apartment',
      'price': 206,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.865610000000004,
        'longitude': 2.350499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 1.7
    },
    {
      'id': '62454e32-2b6f-4cf0-bc86-410b66feacac',
      'title': 'Waterfront with extraordinary view',
      'type': 'hotel',
      'price': 239,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.846610000000005,
        'longitude': 2.374499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 2.8
    },
    {
      'id': 'daa3ac80-84d3-4001-8c46-54f88c4458e6',
      'title': 'Wood and stone place',
      'type': 'room',
      'price': 159,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.837610000000005,
        'longitude': 2.364499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 3.1
    },
    {
      'id': '5c5167d6-cc7d-4f4b-9c78-76fb909ec492',
      'title': 'Canal View Prinsengracht',
      'type': 'room',
      'price': 228,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.843610000000005,
        'longitude': 2.338499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': false,
      'rating': 2.8
    },
    {
      'id': '7d63ecad-a3d1-4a92-ae1e-52fda7f8a389',
      'title': 'Loft Studio in the Central Area',
      'type': 'house',
      'price': 913,
      'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
      'city': {
        'name': 'Paris',
        'location': {
          'latitude': 48.85661,
          'longitude': 2.351499,
          'zoom': 13
        }
      },
      'location': {
        'latitude': 48.84461,
        'longitude': 2.374499,
        'zoom': 16
      },
      'isFavorite': false,
      'isPremium': true,
      'rating': 4.2
    }
  ]
};

const MOCK_OFFERS_FAVORITES: OfferCard[] = [
  {
    'id': '36d9ad04-73f5-46f6-9650-288b59a6739e',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 929,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2.3
  }
];

export {
  MOCK_OFFERS,
  MOCK_OFFERS_BY_ID,
  MOCK_OFFERS_FAVORITES,
  MOCK_OFFERS_NEARBY
};
