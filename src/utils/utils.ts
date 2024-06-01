import { PreType } from "@/types";

export const dummyTtlTime = (data: PreType[]): number => {
  return data.reduce((total, task) => total + task.time, 0);
};
