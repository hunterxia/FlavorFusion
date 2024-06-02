"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import ImageSection from "../components/ImageSection";
import PreparationTime from "../components/PreparationTime";
import IngredientsSection from "../components/IngredientsSection";
import InstructionsSection from "../components/InstructionsSection";
import NutritionSection from "../components/NutritionSection";
import Divider from "../components/Divider";
import StarRating from "../components/StarRating"
import { young_serif } from "../fonts";

interface RecipeDetails {
  name: string;
  image: string,
  rating: number;
  ingredients: string[];
  steps: string[];
  prep_time: string;
  cook_time: string;
  total_time: string;
  nb_servings: string;
}

interface NutritionalInfo {
  name: string;
  content: string;
}

const RecipePage: React.FC = () => {
  const searchParams = useSearchParams();
  const [recipe, setRecipe] = useState<RecipeDetails | null>(null);
  const [nutritionalInfo, setNutritionalInfo] = useState<NutritionalInfo[]>([]);

  useEffect(() => {
    const recipeUrl = searchParams.get('recipeUrl');
    console.log("url:", recipeUrl)

    if (recipeUrl) {
      const fetchRecipeDetails = async () => {
        try {
          const recipeDetailsResponse = await axios.post('https://htbnccah0i.execute-api.us-east-2.amazonaws.com/prod/recipeDetails', {
            action: 'getRecipeDetails',
            query: recipeUrl
          });

          const nutritionalInfoResponse = await axios.post('https://htbnccah0i.execute-api.us-east-2.amazonaws.com/prod/nutritionalInfo', {
            action: 'getNutritionalInfo',
            query: recipeUrl
          });

          const recipeDetails = recipeDetailsResponse.data;
          const nutritionalInfo = nutritionalInfoResponse.data;
          console.log("recipe details:",recipeDetails)
          console.log("nutritional:", nutritionalInfo)

          setRecipe(recipeDetails);
          setNutritionalInfo([
            { name: "Calories", content: nutritionalInfo.Calories },
            { name: "Fat", content: nutritionalInfo.Fat },
            { name: "Carbs", content: nutritionalInfo.Carbs },
            { name: "Protein", content: nutritionalInfo.Protein }
          ]);
        } catch (error) {
          console.error('Error fetching recipe details or nutritional information:', error);
        }
      };

      fetchRecipeDetails();
    }
  }, [searchParams]);

  if (!recipe) return <p>Loading...</p>;
  const preparationTimes = [
    { name: "Prep Time", time: recipe.prep_time },
    { name: "Cook Time", time: recipe.cook_time }
  ];

  return (
    <div className="my-10 w-full">
      <ImageSection src={recipe.image || "/fruit.jpg"} alt="recipe image" />
      <h1
        className={`${young_serif.className} lg:text-7xl md:text-6xl text-4xl mb-8 text-neutral-dark_charcoal`}
      >
        {recipe.name}
      </h1>
      <StarRating rate = {recipe.rating}/>
      <p className="mainTextStyle mb-10">Servings: {recipe.nb_servings}</p>
      <PreparationTime preparationTime={preparationTimes} total={recipe.total_time} />
      <IngredientsSection ingredients={recipe.ingredients} />
      <Divider />
      <InstructionsSection instructions={recipe.steps} />
      <Divider />
      <NutritionSection nutrition={nutritionalInfo} />
    </div>
  );
};

export default RecipePage;
