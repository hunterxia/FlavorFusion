import React, { ChangeEvent, FormEvent } from "react";
import { outfit, young_serif } from "../../fonts";
interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ setSearchQuery }: SearchBarProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col justify-center items-center h-96">
      <h1 className={`${young_serif.className} lg:text-7xl md:text-6xl text-4xl mb-8 text-neutral-dark_charcoal`}>
        Flavor Fusion
      </h1>
      <h3 className={`${outfit.className} lg:text-3xl md:text-2xl text-2xl mb-8 text-neutral-dark_charcoal`}>
        Find your recipe!
      </h3>

      <form
        className="flex w-full max-w-md flex-row items-center rounded-xl bg-black px-1 shadow-lg"
        onSubmit={handleSubmit}
      >
        <input
          autoComplete="off"
          type="text"
          placeholder="Add ingredient..."
          className={`${outfit.className} h-10 w-full resize-none bg-transparent px-2 text-white placeholder:text-gray-400 border-0 outline-none ring-0 focus:ring-0 transition-all duration-300`}
          name="search"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          aria-disabled="false"
          className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg text-white outline-0 ring-0 hover:bg-white/25 focus-visible:bg-white/25"
        >
          <img src="/search.svg" alt="search icon" className="h-full w-full"/>
        </button>
      </form>
    </div>
  );
}
