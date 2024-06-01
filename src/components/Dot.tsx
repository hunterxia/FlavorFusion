import { DotProp } from "@/types";

const Dot = ({ color }: DotProp) => {
  return <div className={`h-4 w-4 ${color} rounded-full`} />;
};

export default Dot;
