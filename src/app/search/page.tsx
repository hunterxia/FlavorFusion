"use client";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import { outfit, young_serif } from "../fonts";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // You can add more logic here to handle the search
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <SearchBar setSearchQuery={handleSearch} />
      {searchQuery && (
        <div className="mt-8 w-full max-w-md text-center">
          <h2 className={`${young_serif.className} lg:text-7xl md:text-6xl text-4xl mb-8 text-neutral-dark_charcoal`}>
            Search Results for "{searchQuery}"
          </h2>
          {/* Add your search results logic here */}
        </div>
      )}
    </div>
  );
};

