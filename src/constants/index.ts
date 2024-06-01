import { PreType, InstructionsAndNutritionType } from "@/types";

export const dummyPre: PreType[] = [
  { name: "Preparation", time: 5 },
  { name: "Cooking", time: 5 },
];

export const dummyIngredients: String[] = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

export const dummyInstuctions: InstructionsAndNutritionType[] = [
  {
    name: "Beat the eggs",
    content:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.",
  },
  {
    name: "Heat the pan",
    content:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    name: "Cook the omelette",
    content:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    name: "Add fillings (optional)",
    content:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    name: "Fold and serve",
    content:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
];

export const dummyNutrition: InstructionsAndNutritionType[] = [
  {
    name: "Calories",
    content: "277kcal",
  },
  {
    name: "Carbs",
    content: "0g",
  },
  {
    name: "Protein",
    content: "20g",
  },
  {
    name: "Fat",
    content: "22g",
  },
];
