"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import axios from "axios";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./loading";

interface Recipe {
  name: string;
  rate: number;
  image: string;
  url: string;
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    fetchRecipes(searchQuery);
  }, []);

  const fetchRecipes = async (ingredients: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://htbnccah0i.execute-api.us-east-2.amazonaws.com/prod/recipe",
        {
          action: "fetchRecipesByIngredients",
          query: ingredients,
        }
      );
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
    fetchRecipes(query.toLowerCase());
  };

  const handleCardClick = (recipeUrl: string) => {
    router.push(`/recipe?recipeUrl=${encodeURIComponent(recipeUrl)}`);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <SearchBar setSearchQuery={handleSearch} />
      <div className="mt-8 w-full max-w-7xl">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-wrap justify-center">
            {recipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                {...recipe}
                onClick={() => handleCardClick(recipe.url)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
