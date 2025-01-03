import dayjs from "dayjs";

export type Expense = {
  title: string;
  date: dayjs.Dayjs;
  amount: number;
  id: string;
};
