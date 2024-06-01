import { Outfit, Young_Serif } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const young_serif = Young_Serif({ subsets: ["latin"], weight: ["400"] });
