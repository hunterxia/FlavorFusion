import Dot from "@/components/Dot";

interface IngredientsSectionProps {
  ingredients: string[];
}

const IngredientsSection: React.FC<IngredientsSectionProps> = ({
  ingredients,
}) => (
  <section>
    <h2 className="subtitle">Ingredients</h2>

    {ingredients.map((item, i) => (
      <div className="flexCenter gap-10 mb-2" key={i}>
        <Dot color="bg-primary-nutmeg" />
        <p className="mainTextStyle">{item}</p>
      </div>
    ))}
  </section>
);

export default IngredientsSection;
