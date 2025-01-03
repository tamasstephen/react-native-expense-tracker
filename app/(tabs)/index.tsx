import AppView from "@/components/AppView";
import ExpenseList from "@/components/ExpenseList";
import useExpenseStore from "@/store/expenseStore";
import { filterLastSevenDays, sortDates } from "@/utils/helpers";

export default function HomeScreen() {
  const { expenses } = useExpenseStore();
  const lastSevenDaysExpenses = filterLastSevenDays(expenses);
  return (
    <AppView>
      <ExpenseList expenses={sortDates(lastSevenDaysExpenses)} />
    </AppView>
  );
}
