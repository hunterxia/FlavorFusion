import Divider from "./Divider";

interface NutritionItem {
  name: string;
  content: string;
}

interface NutritionSectionProps {
  nutrition: NutritionItem[];
}

const NutritionSection: React.FC<NutritionSectionProps> = ({ nutrition }) => (
  <section>
    <h2 className="subtitle">Nutrition</h2>

    <p className="mainTextStyle mb-10">
      The table below shows nutritional values per serving without the
      additional fillings.
    </p>

    {nutrition.map((item, i) => (
      <div className="mb-10" key={i}>
        <div className="flexCenter">
          <p className="lg:text-4xl text-2xl text-neutral-wenge_brown w-[50%] pl-12">
            {item.name}
          </p>
          <p className="text-primary-nutmeg text-2xl lg:text-[33px] font-semibold">
            {item.content}
          </p>
        </div>
        {nutrition.length - 1 !== i && <Divider />}
      </div>
    ))}
  </section>
);

export default NutritionSection;
