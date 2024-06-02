import React from 'react';
import StarRating from './StarRating';

interface RecipeCardProps {
  name: string;
  rate: number;
  image: string;
  url: string;
  onClick: () => void;
}

export default function RecipeCard({ name, rate, image, onClick }: RecipeCardProps) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-4 cursor-pointer" onClick={onClick}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="mt-2 text-lg font-bold">{name}</h3>
          <div className="mt-2 flex items-center">
          <StarRating rate={rate} />
          </div>
        </div>
      </div>
    </div>
  );
}
