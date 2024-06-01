interface InstructionsSectionProps {
  instructions: string[];
}

const InstructionsSection: React.FC<InstructionsSectionProps> = ({
  instructions,
}) => (
  <section>
    <h2 className="subtitle">Instructions</h2>

    {instructions.map((item, i) => (
      <div className="flex items-start gap-10 mb-2" key={i}>
        <p className="text-primary-nutmeg text-2xl lg:text-[33px]">{i + 1}.</p>
        <p className="mainTextStyle">{item}</p>
      </div>
    ))}
  </section>
);

export default InstructionsSection;
