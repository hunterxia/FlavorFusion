import React from 'react';

interface StarRatingProps {
  rate: number;
}

export default function StarRating({ rate }: StarRatingProps) {
  const renderStars = (rate: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        stars.push(
          <svg key={i} className="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.122-6.545L0 7.455l6.561-.955L10 0l3.439 6.5L20 7.455l-5.244 3.09 1.122 6.545z"/>
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.122-6.545L0 7.455l6.561-.955L10 0l3.439 6.5L20 7.455l-5.244 3.09 1.122 6.545z"/>
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars(rate)}
    </div>
  );
}
