"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageSection from "@/components/ImageSection";
import PreparationTime from "@/components/PreparationTime";
import IngredientsSection from "@/components/IngredientsSection";
import InstructionsSection from "@/components/InstructionsSection";
import NutritionSection from "@/components/NutritionSection";
import Divider from "@/components/Divider";
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
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const ingredientsResponse = await axios.get(
          "https://<api-id>.execute-api.<region>.amazonaws.com/dev/ingredients"
        );
        const instructionsResponse = await axios.get(
          "https://<api-id>.execute-api.<region>.amazonaws.com/dev/instructions"
        );
        const nutritionResponse = await axios.get(
          "https://<api-id>.execute-api.<region>.amazonaws.com/dev/nutrition"
        );

        setRecipe({
          title: "Simple Omelette Recipe",
          description:
            "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
          preparationTime: ingredientsResponse.data.preparationTime,
          totalTime: ingredientsResponse.data.totalTime,
          ingredients: ingredientsResponse.data.ingredients,
          instructions: instructionsResponse.data,
          nutrition: nutritionResponse.data,
        });
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    fetchRecipeData();
  }, []);

  if (!recipe) {
    return <p>Loading...</p>;
  }

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
