import { Expense } from "@/types/Expense";
import dayjs from "dayjs";

export const sortDates = (arr: Expense[]) => {
  return [...arr].sort((a, b) =>
    dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1,
  );
};
export const filterLastSevenDays = (arr: Expense[]) => {
  const today = dayjs();
  return arr.filter((expense) => {
    const diff = today.diff(expense.date, "d");
    return diff < 7;
  });
};
