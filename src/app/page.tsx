import Image from "next/image";

import { young_serif } from "./fonts";
import {
  dummyPre,
  dummyIngredients,
  dummyInstuctions,
  dummyNutrition,
} from "@/constants";
import { dummyTtlTime } from "@/utils/utils";
import Divider from "@/components/Divider";
import Dot from "@/components/Dot";

export default function Home() {
  return (
    <div className="my-10 w-full">
      <section>
        <Image
          src="/fruit.jpg"
          alt="recipe image"
          width={1200}
          height={1000}
          className="w-full rounded-2xl mb-10"
        />
        <h1
          className={`${young_serif.className} lg:text-7xl md:text-6xl text-4xl mb-8 text-neutral-dark_charcoal`}
        >
          Simple Omelette Recipe
        </h1>
        <p className="mainTextStyle mb-10">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="bg-neutral-rose_white rounded-2xl px-[4.5%] py-[5%] mb-10">
          <h3 className="text-primary-dark_raspberry font-semibold md:text-4xl text-2xl mb-8">
            Preparation time
          </h3>

          <div className="flex flex-col gap-3 pl-5 ">
            <div className="flexCenter gap-10">
              <Dot color="bg-primary-dark_raspberry" />
              <p className="mainTextStyle">
                Total: Approximately {dummyTtlTime(dummyPre)} minutes
              </p>
            </div>
            {dummyPre.map((item) => (
              <div className="flexCenter gap-10" key={item.name}>
                <Dot color="bg-primary-dark_raspberry" />
                <p className="mainTextStyle">
                  {item.name}: {item.time} minutes
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className={`${young_serif.className} subtitle`}>Ingredients</h2>

        {dummyIngredients.map((item, i) => (
          <div className="flexCenter gap-10 mb-2" key={i}>
            <Dot color="bg-primary-nutmeg" />
            <p className="mainTextStyle">{item}</p>
          </div>
        ))}
      </section>

      <Divider />

      <section>
        <h2 className={`${young_serif.className} subtitle`}>Instructions</h2>

        {dummyInstuctions.map((item, i) => (
          <div className="flex items-start gap-10 mb-2" key={i}>
            <p className="text-primary-nutmeg text-2xl lg:text-[33px]">
              {i + 1}.
            </p>
            <p className="mainTextStyle">
              {item.name}:{item.content}
            </p>
          </div>
        ))}
      </section>

      <Divider />

      <section>
        <h2 className={`${young_serif.className} subtitle`}>Nutrition</h2>

        <p className="mainTextStyle mb-10 ">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>

        {dummyNutrition.map((item, i) => (
          <div className="mb-10" key={i}>
            <div className="flexCenter">
              <p className="lg:text-4xl text-2xl text-neutral-wenge_brown w-[50%] pl-12">
                {item.name}
              </p>
              <p className="text-primary-nutmeg text-2xl lg:text-[33px] font-semibold">
                {item.content}
              </p>
            </div>
            {dummyNutrition.length - 1 !== i && <Divider />}
          </div>
        ))}
      </section>
    </div>
  );
}
