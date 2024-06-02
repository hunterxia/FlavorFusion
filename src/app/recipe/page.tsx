"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import axios from "axios";
import ImageSection from "./components/ImageSection";
import PreparationTime from "./components/PreparationTime";
import IngredientsSection from "./components/IngredientsSection";
import InstructionsSection from "./components/InstructionsSection";
import NutritionSection from "./components/NutritionSection";
import Divider from "./components/Divider";
import { young_serif } from "../fonts";

interface Recipe {
  title: string;
  description: string;
  preparationTime: { name: string; time: number }[];
  totalTime: number;
  ingredients: string[];
  instructions: string[];
  nutrition: { name: string; content: string }[];
}

const Home: React.FC = () => {
  const searchParams = useSearchParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const nutritionalInfoParam = searchParams.get('nutritionalInfo');

    if (nutritionalInfoParam) {
      const nutritionalInfo = JSON.parse(decodeURIComponent(nutritionalInfoParam));
      setRecipe({
        title: "Sample Recipe Title",
        description: "This is a sample recipe description.",
        preparationTime: [
          { name: "Prep Time", time: 10 },
          { name: "Cook Time", time: 20 }
        ],
        totalTime: 30,
        ingredients: ["1 cup flour", "2 eggs", "1/2 cup milk"],
        instructions: ["Mix all ingredients", "Bake for 20 minutes"],
        nutrition: [
          { name: "Calories", content: nutritionalInfo.Calories },
          { name: "Fat", content: nutritionalInfo.Fat },
          { name: "Carbs", content: nutritionalInfo.Carbs },
          { name: "Protein", content: nutritionalInfo.Protein }
        ]
      });
    }
  }, [searchParams]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="my-10 w-full">
      <ImageSection src="/fruit.jpg" alt="recipe image" />
      <h1
        className={`${young_serif.className} lg:text-7xl md:text-6xl text-4xl mb-8 text-neutral-dark_charcoal`}
      >
        {recipe.title}
      </h1>
      <p className="mainTextStyle mb-10">{recipe.description}</p>
      <PreparationTime
        preparationTime={recipe.preparationTime}
        total={recipe.totalTime}
      />
      <IngredientsSection ingredients={recipe.ingredients} />
      <Divider />
      <InstructionsSection instructions={recipe.instructions} />
      <Divider />
      <NutritionSection nutrition={recipe.nutrition} />
    </div>
  );
};

export default Home;

