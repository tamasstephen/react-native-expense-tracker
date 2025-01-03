import AppView from "@/components/AppView";
import ExpenseList from "@/components/ExpenseList";
import useExpenseStore from "@/store/expenseStore";
import { sortDates } from "@/utils/helpers";

export default function TabTwoScreen() {
  const { expenses } = useExpenseStore();
  return (
    <AppView>
      <ExpenseList expenses={sortDates(expenses)} />
    </AppView>
  );
}
