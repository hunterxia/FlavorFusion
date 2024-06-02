// src/app/components/RecipeCard.tsx
import React from 'react';

interface RecipeCardProps {
  name: string;
  rate: number;
  image: string;
  url: string;
  onClick: () => void;
}

export default function RecipeCard({ name, rate, image, onClick }: RecipeCardProps) {
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
    <div className="w-full sm:w-1/2 lg:w-1/4 p-4 cursor-pointer" onClick={onClick}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="mt-2 text-lg font-bold">{name}</h3>
          <div className="mt-2 flex items-center">
            {renderStars(rate)}
          </div>
        </div>
      </div>
    </div>
  );
}
