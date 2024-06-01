import Dot from "@/components/Dot";

interface PreparationTimeProps {
  preparationTime: { name: string; time: number }[];
  total: number;
}

const PreparationTime: React.FC<PreparationTimeProps> = ({
  preparationTime,
  total,
}) => (
  <section className="bg-neutral-rose_white rounded-2xl px-[4.5%] py-[5%] mb-10">
    <h3 className="text-primary-dark_raspberry font-semibold md:text-4xl text-2xl mb-8">
      Preparation time
    </h3>

    <div className="flex flex-col gap-3 pl-5 ">
      <div className="flexCenter gap-10">
        <Dot color="bg-primary-dark_raspberry" />
        <p className="mainTextStyle">Total: Approximately {total} minutes</p>
      </div>
      {preparationTime.map((item) => (
        <div className="flexCenter gap-10" key={item.name}>
          <Dot color="bg-primary-dark_raspberry" />
          <p className="mainTextStyle">
            {item.name}: {item.time} minutes
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default PreparationTime;
