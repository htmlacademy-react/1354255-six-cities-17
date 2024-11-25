// 100% / 5 (max rating)
const RATING_COEF = 20;

const capitalizeFirstLetter = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const convertRatingToStyle = (rating: number) => `${Math.round(rating) * RATING_COEF}%`;

const humanizeDate = (date: string) => {
  const event = new Date(date);

  return event.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
};

export {
  capitalizeFirstLetter,
  convertRatingToStyle,
  humanizeDate
};
