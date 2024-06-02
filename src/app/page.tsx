"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Recipe {
  name: string;
  rate: number;
  image: string;
  url: string;
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const fetchRecipes = async (ingredients: string) => {
    try {
      const response = await axios.post('https://htbnccah0i.execute-api.us-east-2.amazonaws.com/prod/recipe', {
        action: 'fetchRecipesByIngredients',
        query: ingredients
      });
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
    fetchRecipes(query.toLowerCase());
  };
  const handleCardClick = async (recipeUrl: string) => {
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
      console.log("nutritionalInfo:", nutritionalInfo)
      console.log("recipe details:", recipeDetails)

      router.push(`/recipe?nutritionalInfo=${encodeURIComponent(JSON.stringify(nutritionalInfo))}`);
    } catch (error) {
      console.error('Error fetching recipe details or nutritional information:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <SearchBar setSearchQuery={handleSearch} />
      <div className="mt-8 w-full max-w-7xl px-4">
        <div className="flex flex-wrap justify-center">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} onClick={() => handleCardClick(recipe.url)} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Home;
